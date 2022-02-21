import Phaser from 'phaser';
import Hero from '../entities/Hero';
import axios from 'axios';

//Images
import tileMapLevel1 from '../../assets/tilemaps/level-1.json';
import worldSheet1 from '../../assets/tilesets/world-1-sheet.png';
import klexStand from '../../assets/hero/Klex-Stand.png';
import klexRun from '../../assets/hero/Klex-Run.png';
import Background from '../../assets/background.jpg';
import DesertBg from '../../assets/TestBackground.png';
import secondBg from '../../assets/secondBg.png';
import thirdBg from '../../assets/thirdBg2.png';
import foreGround from '../../assets/foreGround.png';
import Turtle from '../../assets/item_15.png';
import Platform from '../../assets/PlatformLong.png';
import FinalBg from '../../assets/DesertBGSmall.png';

//DialogBoxImage
import DialogBoxImage from '../../assets/DialogBoxSmall.png';

let inZone = false;
let div1 = document.createElement('div');
let DialogBox2 = document.createElement('div');
let visible = false;

const turtleX = 2000;

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.tilemapTiledJSON('level-1', tileMapLevel1);
    this.load.image('world-1-sheet', worldSheet1);
    this.load.image('platform', Platform);
    this.load.image('sky', Background);
    this.load.image('bg', DesertBg);
    this.load.image('FinalBg', FinalBg);
    this.load.image('2bg', secondBg);
    this.load.image('3bg', thirdBg);
    this.load.image('turtle', Turtle);
    this.load.image('DialogBox', DialogBoxImage);
    this.load.image('Foreground', foreGround);

    this.load.spritesheet('hero-idle-sheet', klexStand, {
      frameWidth: 127,
      frameHeight: 160,
    });

    this.load.spritesheet('hero-run-sheet', klexRun, {
      frameWidth: 127,
      frameHeight: 160,
    });
  }

  create(data) {
    const width = this.scale.width;
    const height = this.scale.height;

    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.add.image(width * 0.5, height * 0.2, 'sky').setScrollFactor(0);

    this.add.image(500, 100, 'bg').setScrollFactor(0.3);
    this.add.image(700, 400, 'FinalBg').setScrollFactor(0.3).setScale(0.65);
    this.add.image(1300, 510, '2bg').setScrollFactor(0.5);
    this.add.image(1300, 550, '3bg').setScrollFactor(0.7);

    // ITEMS

    // TURTLE
    const turtle = this.physics.add
      .staticImage(turtleX, 830, 'turtle')
      .setScale(0.13);

    this.anims.create({
      key: 'hero-idle',
      frames: this.anims.generateFrameNumbers('hero-idle-sheet'),
      frameRate: 7,
      repeat: -1,
    });

    this.anims.create({
      key: 'hero-run',
      frames: this.anims.generateFrameNumbers('hero-run-sheet'),
      frameRate: 9,
      repeat: -1,
    });

    //this.addMap();

    this.addMap2();

    this.addHero();

    this.add.image(1300, 750, 'Foreground').setScrollFactor(1.2);

    this.hero.body.collideWorldBounds = true;

    this.cameras.main.setBounds(0, 0, 9800, height * 1.4);
    this.cameras.main.startFollow(this.hero);

    this.physics.add.overlap(this.hero, turtle, function () {
      inZone = true;
    });

    // DIALOGBOX
    div1.style =
      ' width: 220px; height: 100px; font: 24px SeoulHangang; font-weight: 400; ';
    div1.innerText = 'Klex';

    // Add the DIalogBackground Sprite and make it invisible as default
    DialogBox2 = this.add.sprite(turtleX, 600, 'DialogBox');
    DialogBox2.visible = false;
    //this.add.sprite(800, 700, 'DialogBox');
  }

  //Methods
  addHero() {
    this.hero = new Hero(this, 600, 900);
  }

  addMap2() {
    const height = 1000;
    this.platform = this.physics.add.staticImage(4900, height, 'platform');
    //const groundLayer = this.platform.createStaticLayer('Ground', 'platform');
    this.physics.world.setBounds(0, 0, 9800, height - 64);
    this.physics.world.setBoundsCollision(true, true, false, true);
    this.physics.add.collider(this.platform, this.hero);
  }

  addMap() {
    this.map = this.make.tilemap({ key: 'level-1' });
    const groundTiles = this.map.addTilesetImage('world-1', 'world-1-sheet');
    console.table('groundTiles: ' + groundTiles);
    const groundLayer = this.map.createStaticLayer('Ground', groundTiles);
    console.log('groundLayer: ' + groundLayer);
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
    if (inZone && this.cursorKeys.space.isDown) {
      console.log('colliding');
      this.box2 = this.add.dom(turtleX, 550, div1);
      DialogBox2.visible = true;
      visible = true;
    }

    if (visible && this.cursorKeys.shift.isDown) {
      this.box2.destroy();
      DialogBox2.visible = false;
    }

    inZone = false;
  }
}

export default Game;
