import Phaser from "phaser";
import Hero from "../entities/Hero";
import axios from "../../../../utils/axiosInstance";

//Images
import tileMapLevel1 from "../../assets/tilemaps/level-1.json";
import worldSheet1 from "../../assets/tilesets/world-1-sheet.png";
import klexStand from "../../assets/hero/Klex-Stand.png";
import klexRun from "../../assets/hero/Klex-Run.png";
import Background from "../../assets/background.jpg";
import DesertBg from "../../assets/TestBackground.png";
import secondBg from "../../assets/secondBg.png";
import thirdBg from "../../assets/thirdBg2.png";
import foreGround from "../../assets/foreGround.png";
import Turtle from "../../assets/item_15.2.png";
import Platform from "../../assets/PlatformLong.png";
import FinalBg from "../../assets/DesertBGSmall.png";
import Flag from "../../assets/flag.png";
import spaceButton from "../../assets/spaceBar.png";
import StoneForeGround from "../../assets/stoneFG.png";

//DialogBoxImage
//import DialogBoxImage from "../../assets/DialogBoxSmall.png";

let inZoneTurtle = false;
let inZoneFlag = false;
let div15 = document.createElement("div"); //!turtle div
//let DialogBox2 = document.createElement("div"); //! comment out?
let DialogBoxFlag = document.createElement("div");
let SpaceBar;
let visible = false;
let quizBox = document.createElement("div");
let quizExit;
const FlagPos = 1000;

const turtleX = 600;

// EXTERNAL LINK
function openExternalLink() {
  var url = "http://localhost:3000/quiz/desert"; //! we might have to change for deployment

  window.open(url, "_self");
}

//*------ GET ITEMS FROM DATABASE

const getData = async () => {
  try {
    const response = await axios.get(`/api/content/game/Desert`);
    if (response.status === 200) {
      const data = response.data.gameContent.items;
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

let items = {};

getData().then((res) => {
  items = res;
});


//*------ CONTENT LOAD ABOVE THIS LINE
class Game extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    this.load.tilemapTiledJSON("level-1", tileMapLevel1);
    this.load.image("world-1-sheet", worldSheet1);
    this.load.image("platform", Platform);
    this.load.image("sky", Background);
    this.load.image("bg", DesertBg);
    this.load.image("FinalBg", FinalBg);
    this.load.image("2bg", secondBg);
    this.load.image("3bg", thirdBg);
    this.load.image("turtle", Turtle);
    //this.load.image("DialogBox", DialogBoxImage);
    this.load.image("Foreground", foreGround);
    this.load.image("flag", Flag);
    this.load.image("spaceBar", spaceButton);
    this.load.image("stones", StoneForeGround);

    this.load.spritesheet("hero-idle-sheet", klexStand, {
      frameWidth: 127,
      frameHeight: 160,
    });

    this.load.spritesheet("hero-run-sheet", klexRun, {
      frameWidth: 127,
      frameHeight: 160,
    });
  }

  create(data) {
    const width = this.scale.width;
    const height = this.scale.height;

    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.add.image(width * 0.5, height * 0.2, "sky").setScrollFactor(0);

    this.add.image(500, 100, "bg").setScrollFactor(0.3);
    this.add.image(700, 400, "FinalBg").setScrollFactor(0.3).setScale(0.65);
    this.add.image(1300, 510, "2bg").setScrollFactor(0.5);
    this.add.image(1300, 550, "3bg").setScrollFactor(0.7);

    //! ITEMS
const {
    item_0,
    item_1,
    item_2,
    item_3,
    item_4,
    item_5: ostrich, //optional renaming
    item_6,
    item_7,
    item_8,
    item_9,
    item_10,
    item_11,
    item_12,
    item_13,
    item_14,
    item_15,
  } = items;

    // TURTLE IMAGE
    const turtle = this.physics.add
      .staticImage(turtleX, 830, "turtle")
      .setScale(0.25)
      .setSize(300, 200)
      .setOffset(750, 400);

    // OSTRICH
    //! ITEMS END----------------------------------------------------------------------
    this.anims.create({
      key: "hero-idle",
      frames: this.anims.generateFrameNumbers("hero-idle-sheet"),
      frameRate: 7,
      repeat: -1,
    });

    this.anims.create({
      key: "hero-run",
      frames: this.anims.generateFrameNumbers("hero-run-sheet"),
      frameRate: 9,
      repeat: -1,
    });

    //this.addMap();

    // MAP LOADING
    this.addMap2();

    // EXIT FLAG
    const exitFlag = this.physics.add
      .staticImage(FlagPos, 845, "flag")
      .setScale(0.2)
      .setSize(170, 200)
      .setOffset(300, 350)
      .setInteractive();

    exitFlag.on("pointerup", openExternalLink, this);
    // HERO LOADING
    this.addHero();

    // FOREGROUND
    this.add.image(1300, 750, "Foreground").setScrollFactor(1.2);
    this.add.image(3700, 750, "Foreground").setScrollFactor(1.2);
    this.add.image(5000, 750, "Foreground").setScrollFactor(1.2);
    this.add.image(6300, 750, "stones").setScrollFactor(1.2);
    this.add.image(7600, 750, "stones").setScrollFactor(1.2);
    this.add.image(8900, 750, "stones").setScrollFactor(1.2);

    // HERO WORLD COLLIDERS
    this.hero.body.collideWorldBounds = true;

    // CAMERA CONTROLS
    this.cameras.main.setBounds(0, 0, 9800, height * 1.4);
    this.cameras.main.startFollow(this.hero);

    // COLLISION DETECTION

    // OVERLAP FLAG
    this.physics.add.overlap(this.hero, exitFlag, function () {
      inZoneFlag = true;
    });

    //! DIALOGBOX TURTLE ----------------------------------------------------------------------
    // OVERLAP TURTLE
    this.physics.add.overlap(this.hero, turtle, function () {
      inZoneTurtle = true;
    });
    // TURTLE CONTENT
    div15.classList.add("itemBox");
    div15.innerHTML = `<div><p>${(item_15[0])}</p>
    <p>${(item_15[1]).replace("/", "<br/><br/>")}</p></div>`

    // Add the DialogBackground Sprite and make it invisible as default
    //DialogBox2 = this.add.sprite(turtleX, 600, "DialogBox"); //! comment out maybe?
    //DialogBox2.visible = false;
    //this.add.sprite(800, 700, 'DialogBox');

    //! TURTLE ENDS ----------------------------------------------------------------------

    // QUIZBOX
    quizBox.classList.add("itemBox")
    quizBox.innerText = "Checkout the Quiz";
    quizExit = this.add.dom(FlagPos + 100, 720, quizBox);
    quizExit.visible = false;
    DialogBoxFlag = this.add.sprite(FlagPos, 630, "DialogBox").setScale(0.6);
    DialogBoxFlag.visible = false;

    // PRESS SPACE ICON
    SpaceBar = this.add.image(FlagPos, 600, "spaceBar").setScale(0.15);
    SpaceBar.visible = false;
  }

  //Methods
  addHero() {
    this.hero = new Hero(this, 600, 900);
  }

  addMap2() {
    const height = 1000;
    this.platform = this.physics.add.staticImage(4900, height, "platform");
    //const groundLayer = this.platform.createStaticLayer('Ground', 'platform');
    this.physics.world.setBounds(0, 0, 9800, height - 64);
    this.physics.world.setBoundsCollision(true, true, false, true);
    this.physics.add.collider(this.platform, this.hero);
  }

  addMap() {
    this.map = this.make.tilemap({ key: "level-1" });
    const groundTiles = this.map.addTilesetImage("world-1", "world-1-sheet");
    console.table("groundTiles: " + groundTiles);
    const groundLayer = this.map.createStaticLayer("Ground", groundTiles);
    console.log("groundLayer: " + groundLayer);
    groundLayer.setCollision([8], true);

    this.physics.world.setBounds(
      0,
      0,
      this.map.widthInPixels,
      this.map.heightInPixels
    );
    this.physics.world.setBoundsCollision(true, true, false, true);
  }

  update(time, delta) {
    // TURTLE INFOBOX
    if (inZoneTurtle && this.cursorKeys.space.isDown) {
      console.log(" this colliding");
      this.box2 = this.add.dom(turtleX, 550, div15);
     // DialogBox2.visible = true;
      visible = true;
    }
    //! TURTLE ----------------------------------------------------------------------
    // FLAG
    if (inZoneFlag) {
      SpaceBar.visible = true;
      quizExit.visible = true;
      DialogBoxFlag.visible = true;
      if (this.cursorKeys.space.isDown) {
        openExternalLink();
      }
    } else {
      SpaceBar.visible = false;
      quizExit.visible = false;
      DialogBoxFlag.visible = false;
    }

    // DESTROY INFOBOX
    if (visible && this.cursorKeys.shift.isDown) {
      this.box2.destroy();
      //DialogBox2.visible = false; //!no need anymore since bg with scss
    }

    inZoneTurtle = false;
    inZoneFlag = false;
  }
}

export default Game;
