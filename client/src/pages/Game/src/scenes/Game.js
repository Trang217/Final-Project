import Phaser from "phaser";
import Hero from "../entities/Hero";
import axios from "../../../../utils/axiosInstance";

//* Import Landscape Images
import klexStand from "../../assets/hero/Klex-Stand.png";
import klexRun from "../../assets/hero/Klex-Run.png";
import Background1 from "../../assets/BG1.png";
import Background2 from "../../assets/BG2.png";
import Background3 from "../../assets/BG3.png";
import Platform from "../../assets/Platform.png";
import Flag from "../../assets/flag.png";
import StoneForeGround from "../../assets/stoneFG.png";
import MD2 from "../../assets/MD2.png";
import MD3 from "../../assets/MD3.png";
import MD4 from "../../assets/MD4.png";
import Stones from "../../assets/stonesMD.png";
import Cacti from "../../assets/cactiMD.png";
import Instructions from "../../assets/instructions.png";

//* Import Discovery Items
import Start from "../../assets/discovery_items/item_0.png";
import Ruin from "../../assets/discovery_items/item_1.png";
import Landform from "../../assets/discovery_items/item_2.png";
import Maps from "../../assets/discovery_items/item_3.png";
import Fox from "../../assets/discovery_items/item_4.png";
import Ostrich from "../../assets/discovery_items/item_5.png";
import Ringtail from "../../assets/discovery_items/item_6.png";
import Cactus from "../../assets/discovery_items/item_7.png";
import Oasis from "../../assets/discovery_items/item_8.png";
import Sage from "../../assets/discovery_items/item_9.png";
import Snake from "../../assets/discovery_items/item_10.png";
import Boojum from "../../assets/discovery_items/item_11.png";
import Yucca from "../../assets/discovery_items/item_12.png";
import Camel from "../../assets/discovery_items/item_13.png";
import ElephantTree from "../../assets/discovery_items/item_14.png";
import Turtle from "../../assets/discovery_items/item_15.png";

//* Create Collision Zones
let inZoneStart = false;
let inZoneRuin = false;
let inZoneLandform = false;
let inZoneMaps = false;
let inZoneFox = false;
let inZoneOstrich = false;
let inZoneRingtail = false;
let inZoneCactus = false;
let inZoneOasis = false;
let inZoneSage = false;
let inZoneSnake = false;
let inZoneBoojum = false;
let inZoneYucca = false;
let inZoneCamel = false;
let inZoneElephantTree = false;
let inZoneTurtle = false;
let inZoneFlag = false;

//* Create Info Boxes

let visible = false; // set to false by default

let div0 = document.createElement("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
let div5 = document.createElement("div");
let div6 = document.createElement("div");
let div7 = document.createElement("div");
let div8 = document.createElement("div");
let div9 = document.createElement("div");
let div10 = document.createElement("div");
let div11 = document.createElement("div");
let div12 = document.createElement("div");
let div13 = document.createElement("div");
let div14 = document.createElement("div");
let div15 = document.createElement("div");
let quizBox = document.createElement("div");

//* Position Discovery Items on X-axis

const startX = 800;
const ruinX = 1400;
const landformX = 2400;
const mapsX = 3000;
const foxX = 3600;
const ostrichX = 4100;
const ringtailX = 4750;
const cactusX = 5250;
const yuccaX = 6200;
const sageX = 6600;
const snakeX = 6750;
const boojumX = 7200;
const oasisX = 7650;
const camelX = 8000;
const elephantTreeX = 8500;
const turtleX = 8800;

const FlagPos = 9300;

//? EXTERNAL LINK
function openExternalLink() {
  var url = window.location.origin.concat("/quiz/desert");
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

//*------ CREATE GAME
class Game extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    //* Preload Discovery Items
    this.load.image("intro", Instructions);
    this.load.image("start", Start);
    this.load.image("ruin", Ruin);
    this.load.image("landform", Landform);
    this.load.image("maps", Maps);
    this.load.image("fox", Fox);
    this.load.image("ostrich", Ostrich);
    this.load.image("ringtail", Ringtail);
    this.load.image("cactus", Cactus);
    this.load.image("oasis", Oasis);
    this.load.image("sage", Sage);
    this.load.image("snake", Snake);
    this.load.image("boojum", Boojum);
    this.load.image("yucca", Yucca);
    this.load.image("camel", Camel);
    this.load.image("elephantTree", ElephantTree);
    this.load.image("turtle", Turtle);
    this.load.image("flag", Flag);

    //* Preload Landscape
    this.load.image("platform", Platform);
    this.load.image("BG1", Background1);
    this.load.image("BG2", Background2);
    this.load.image("BG3", Background3);
    this.load.image("MD2", MD2);
    this.load.image("MD3", MD3);
    this.load.image("MD4", MD4);
    this.load.image("stones", StoneForeGround);
    this.load.image("stonesMD", Stones);
    this.load.image("cactiMD", Cacti);

    //* Preload Character
    this.load.spritesheet("hero-idle-sheet", klexStand, {
      frameWidth: 127,
      frameHeight: 160,
    });

    this.load.spritesheet("hero-run-sheet", klexRun, {
      frameWidth: 127,
      frameHeight: 160,
    });
  }

  async create(data) {
    const width = this.scale.width;
    const height = this.scale.height;

    this.cursorKeys = this.input.keyboard.createCursorKeys();

    // Background LOADING
    this.addMapBackground();
    this.addMiddleLayer();
    //*------ DESTRUCTURING INFOBOX TEXT FROM DB

    items = await getData();

    const {
      item_0,
      item_1,
      item_2,
      item_3,
      item_4,
      item_5,
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

    //*------ FORMATE IMAGE AND ITS COLLISION AREA

    this.physics.add.staticImage(350, 480, "intro").setScale(0.5);
   
    const start = this.physics.add
      .staticImage(startX, 890, "start")
      .setScale(0.25)
      .setSize(250, 200)
      .setOffset(300, 50);

    const ruin = this.physics.add
      .staticImage(ruinX, 780, "ruin")
      .setScale(0.5)
      .setSize(600, 200)
      .setOffset(550, 300);

    const landform = this.physics.add
      .staticImage(landformX, 820, "landform")
      .setScale(0.3)
      .setSize(600, 200)
      .setOffset(850, 400);

    const maps = this.physics.add
      .staticImage(mapsX, 855, "maps")
      .setScale(0.3)
      .setSize(300, 200)
      .setOffset(300, 170);

    const fox = this.physics.add
      .staticImage(foxX, 860, "fox")
      .setScale(0.25)
      .setSize(300, 200)
      .setOffset(350, 250);

    const ostrich = this.physics.add
      .staticImage(ostrichX, 738, "ostrich")
      .setScale(0.35)
      .setSize(300, 200)
      .setOffset(250, 600);

    const ringtail = this.physics.add
      .staticImage(ringtailX, 790, "ringtail")
      .setScale(0.2)
      .setSize(200, 200)
      .setOffset(400, 820);

    const cactus = this.physics.add
      .staticImage(cactusX, 820, "cactus")
      .setScale(0.25)
      .setSize(150, 200)
      .setOffset(200, 400);

    const yucca = this.physics.add
      .staticImage(yuccaX, 810, "yucca")
      .setScale(0.29)
      .setSize(200, 200)
      .setOffset(250, 500);

    const sage = this.physics.add
      .staticImage(sageX, 820, "sage")
      .setScale(0.25)
      .setSize(150, 200)
      .setOffset(370, 400);

    const snake = this.physics.add
      .staticImage(snakeX, 875, "snake")
      .setScale(0.2)
      .setSize(150, 200)
      .setOffset(460, 220);

    const boojum = this.physics.add
      .staticImage(boojumX, 830, "boojum")
      .setScale(0.25)
      .setSize(100, 400)
      .setOffset(320, 1290);

    const oasis = this.physics.add
      .staticImage(oasisX, 810, "oasis")
      .setScale(0.5)
      .setSize(300, 200)
      .setOffset(250, 300);

    const camel = this.physics.add
      .staticImage(camelX, 762, "camel")
      .setScale(0.4)
      .setSize(300, 200)
      .setOffset(350, 450);

    const elephantTree = this.physics.add
      .staticImage(elephantTreeX, 730, "elephantTree")
      .setScale(0.4)
      .setSize(300, 200)
      .setOffset(900, 750);

    const turtle = this.physics.add
      .staticImage(turtleX, 860, "turtle")
      .setScale(0.18)
      .setSize(200, 200)
      .setOffset(850, 400);

    const exitFlag = this.physics.add
      .staticImage(FlagPos, 845, "flag")
      .setScale(0.2)
      .setSize(170, 200)
      .setOffset(300, 350)
      .setInteractive();

    //* Go from Game to Quiz
    exitFlag.on("pointerup", openExternalLink, this);

    this.add.image(1100, 630, "stonesMD").setScrollFactor(1.1);
    this.add.image(4000, 765, "stonesMD").setScale(0.6).setScrollFactor(1.1);
    this.add.image(5350, 880, "cactiMD").setScale(0.6).setScrollFactor(1.1);
    this.add.image(7200, 765, "stonesMD").setScale(0.6).setScrollFactor(1.1);
    this.add.image(10000, 765, "stonesMD").setScale(0.6).setScrollFactor(1.1);

    //*------ CHARACTER ANIMATION

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

    //*------ LOADING PLATFORM AND FOREGROUND AND HERO

    // PLATFORM LOADING
    this.addPlatform();
    // HERO LOADING
    this.addHero();

    //* Foreground Images
    this.add.image(1300, 750, "stones").setScrollFactor(1.2);
    this.add.image(3700, 750, "stones").setScrollFactor(1.2);
    this.add.image(5000, 750, "stones").setScrollFactor(1.2);
    this.add.image(6300, 750, "stones").setScrollFactor(1.2);
    this.add.image(7600, 750, "stones").setScrollFactor(1.2);
    this.add.image(8900, 750, "stones").setScrollFactor(1.2);
    this.add.image(10200, 750, "stones").setScrollFactor(1.2);

    //? HERO WORLD COLLIDERS
    this.hero.body.collideWorldBounds = true;

    //? CAMERA CONTROLS
    this.cameras.main.setBounds(0, 0, 9800, height * 1.4);
    this.cameras.main.startFollow(this.hero);

    //*------ DISCOVERY ITEM COLLISION DETECTION

    const addItem = (div, item) => {
      div.classList.add("itemBox");
      div.innerHTML = `<div><p>${item[0]}</p>
      <p>${item[1].replaceAll("/", "<br/><br/>")}</p></div>`;
    };

    //* Flag
    this.physics.add.overlap(this.hero, exitFlag, function () {
      inZoneFlag = true;
    });

    //* Create infobox to exit game
    quizBox.classList.add("quizBox");
    quizBox.innerHTML =
      "<p>Click space to <br/> go to the quiz</></p><div></div>";
    quizBox = this.add.dom(FlagPos + 100, 720, quizBox);
    quizBox.visible = false;

    //* Discovery Items ----
    //! temporary solution - to be updated and wrapped in functions

    this.physics.add.overlap(this.hero, start, function () {
      inZoneStart = true;
    });
    addItem(div0, item_0);

    this.physics.add.overlap(this.hero, ruin, function () {
      inZoneRuin = true;
    });
    addItem(div1, item_1);

    this.physics.add.overlap(this.hero, landform, function () {
      inZoneLandform = true;
    });
    addItem(div2, item_2);

    this.physics.add.overlap(this.hero, maps, function () {
      inZoneMaps = true;
    });
    addItem(div3, item_3);

    this.physics.add.overlap(this.hero, fox, function () {
      inZoneFox = true;
    });
    addItem(div4, item_4);

    this.physics.add.overlap(this.hero, ostrich, function () {
      inZoneOstrich = true;
    });
    addItem(div5, item_5);

    this.physics.add.overlap(this.hero, ringtail, function () {
      inZoneRingtail = true;
    });
    addItem(div6, item_6);

    this.physics.add.overlap(this.hero, cactus, function () {
      inZoneCactus = true;
    });
    addItem(div7, item_7);

    this.physics.add.overlap(this.hero, oasis, function () {
      inZoneOasis = true;
    });
    addItem(div8, item_8);

    this.physics.add.overlap(this.hero, sage, function () {
      inZoneSage = true;
    });
    addItem(div9, item_9);

    this.physics.add.overlap(this.hero, snake, function () {
      inZoneSnake = true;
    });
    addItem(div10, item_10);

    this.physics.add.overlap(this.hero, boojum, function () {
      inZoneBoojum = true;
    });
    addItem(div11, item_11);

    this.physics.add.overlap(this.hero, yucca, function () {
      inZoneYucca = true;
    });
    addItem(div12, item_12);

    this.physics.add.overlap(this.hero, camel, function () {
      inZoneCamel = true;
    });
    addItem(div13, item_13);

    this.physics.add.overlap(this.hero, elephantTree, function () {
      inZoneElephantTree = true;
    });
    addItem(div14, item_14);

    this.physics.add.overlap(this.hero, turtle, function () {
      inZoneTurtle = true;
    });
    addItem(div15, item_15);
  }

  //? Methods
  addHero() {
    this.hero = new Hero(this, 600, 900);
  }

  //? BACKGROUND METHOD
  addMapBackground() {
    const BGArray = ["BG2", "BG3"];
    const BGOffset = [1000, 3000];
    const BGHeight = 410;
    const backgroundMultiply = () => {
      for (let i = 0; i < BGArray.length; i++) {
        this.add.image(BGOffset[i], BGHeight, BGArray[i]).setScrollFactor(0.3);
      }
    };
    backgroundMultiply();
  }

  // BACKGROUND METHOD END //

  //? MIDDLE LAYER METHOD
  addMiddleLayer() {
    const MDArray = ["MD2", "MD4", "MD3"];
    const MDOffset = [1000, 3000, 4800];
    const MDHeight = 570;
    const backgroundMultiply = () => {
      for (let i = 0; i < MDArray.length; i++) {
        this.add.image(MDOffset[i], MDHeight, MDArray[i]).setScrollFactor(0.5);
      }
    };
    backgroundMultiply();
  }

  //? PLATFORM METHOD
  addPlatform() {
    const PlatformArray = ["platform", "platform", "platform", "platform"];
    const PlatformOffset = [0, 2000, 4000, 8000];
    const height = 1000;

    const platformMultiply = () => {
      for (let i = 0; i < 4; i++) {
        this.add.image(PlatformOffset[i], height, PlatformArray[i]);
      }
    };
    platformMultiply();

    this.physics.world.setBounds(0, 0, 9800, height - 64);
    this.physics.world.setBoundsCollision(true, true, false, true);
  }
  // ADD PLATFORM METHOD END //

  update(time, delta) {
    //* ----- SPACE BAR DOWN EVENT: SHOW INFOBOX WHEN IN ZONE
    //! temporary solution - to be updated and wrapped in functions

    if (inZoneStart && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(startX, 550, div0);
      visible = true;
    }

    if (inZoneRuin && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(ruinX, 550, div1);
      visible = true;
    }

    if (inZoneLandform && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(landformX, 550, div2);
      visible = true;
    }

    if (inZoneMaps && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(mapsX, 550, div3);
      visible = true;
    }

    if (inZoneFox && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(foxX, 550, div4);
      visible = true;
    }

    if (inZoneOstrich && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(ostrichX, 550, div5);
      visible = true;
    }

    if (inZoneRingtail && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(ringtailX, 550, div6);
      visible = true;
    }

    if (inZoneCactus && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(cactusX, 550, div7);
      visible = true;
    }

    if (inZoneOasis && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(oasisX, 550, div8);
      visible = true;
    }

    if (inZoneSage && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(sageX, 550, div9);
      visible = true;
    }

    if (inZoneSnake && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(snakeX, 550, div10);
      visible = true;
    }

    if (inZoneBoojum && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(boojumX, 550, div11);
      visible = true;
    }

    if (inZoneYucca && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(yuccaX, 550, div12);
      visible = true;
    }

    if (inZoneCamel && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(camelX, 550, div13);
      visible = true;
    }

    if (inZoneElephantTree && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(elephantTreeX, 550, div14);
      visible = true;
    }

    if (inZoneTurtle && this.cursorKeys.space.isDown) {
      this.box2 = this.add.dom(turtleX, 550, div15);
      visible = true;
    }

    //* ----- SPACE BAR DOWN EVENT: GO TO QUIZ WHEN IN ZONE

    if (inZoneFlag) {
      quizBox.visible = true;
      if (this.cursorKeys.space.isDown) {
        openExternalLink();
      }
    } else {
      quizBox.visible = false;
    }

    //* ----- SHIFT KEY DOWN EVENT: HIDE INFOBOX WHEN IN ZONE
    if (visible && this.cursorKeys.shift.isDown) {
      this.box2.destroy();
    }

    //* ----- RESET THE ZONES

    inZoneStart = false;
    inZoneRuin = false;
    inZoneLandform = false;
    inZoneMaps = false;
    inZoneFox = false;
    inZoneOstrich = false;
    inZoneRingtail = false;
    inZoneCactus = false;
    inZoneOasis = false;
    inZoneSage = false;
    inZoneSnake = false;
    inZoneBoojum = false;
    inZoneYucca = false;
    inZoneCamel = false;
    inZoneElephantTree = false;
    inZoneTurtle = false;
    inZoneFlag = false;
  }
}

export default Game;
