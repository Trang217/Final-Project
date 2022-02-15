import React, { useRef, useState, Component, useEffect } from 'react';
import Phaser from 'phaser';
import Game from './src/scenes/Game';

const ratio = Math.max(
  window.innerWidth / window.innerHeight,
  window.innerHeight / window.innerWidth
);
const DEFAULT_HEIGHT = 720; // any height you want
const DEFAULT_WIDTH = ratio * DEFAULT_HEIGHT;

const GameDesert = () => {
  useEffect(() => {
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: 'game',
      backgroundColor: '#33A5E7',
      scale: {
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      render: {
        pixelArt: false,
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 750 },
          debug: true,
          debugShowVelocity: true,
          debugShowBody: true,
          debugShowStatic: true,
        },
      },
      parent: 'game-content',
      scene: [Game],
    });
  });

  return <div id="game-content" />;
};
export default GameDesert;
