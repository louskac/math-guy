"use client";

import React, { useState, useEffect, useRef } from "react";
import Phaser from "phaser";
import WelcomeScreen from "./WelcomeScreen";
import GameOverScreen from "./GameOverScreen";

const RugEscapeGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const gameRef = useRef(null);

  const [gameOver, setGameOver] = useState(false); // Track if the game is over
  const [userData, setUserData] = useState({ name: "", wallet: "" }); // Track user's name and wallet
  const [finalScore, setFinalScore] = useState(0); // Track the user's final score

  const handleStartGame = ({ name, wallet }) => {
    if (!name || !wallet) {
      alert("You can still play the game, but your score won’t be included in the competition!");
    }
    setUserData({ name: name || "Anonymous", wallet: wallet || "Not Provided" }); // Default values for missing data
    setGameStarted(true); // Start the game
  };

  useEffect(() => {
    if (!gameStarted) return;

    const config = {
      type: Phaser.AUTO,
      parent: gameRef.current,
      width: window.innerWidth,
      height: window.innerHeight * 0.75,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image("pepe", "/images/game/pepe.png");
      this.load.image("rug", "/images/game/rug.webp");
      this.load.image("fud-cloud", "/images/game/fud-cloud.png");
      this.load.image("diamond-hands", "/images/game/diamond-hands.png");
      this.load.image("chillguy", "/images/game/chill-guy.png");
      this.load.image("bath-water", "/images/game/bath-water.png");
      this.load.image("elon-musk", "/images/game/elon-musk.png");
    
      this.load.audio("game", "/audio/game.wav");
      this.load.audio("arcade", "/audio/arcade.wav");
      this.load.audio("collect", "/audio/collect.wav");
      this.load.audio("fail", "/audio/fail.wav");
      this.load.audio("chill", "/audio/chill.ogg");
      this.load.audio("girl", "/audio/girl.mp3");
      this.load.audio("elon", "/audio/elon.wav");
    }

    function create() {
      // Play game.wav if it's not already playing
      if (!this.sound.get("game")) {
        this.gameMusic = this.sound.add("game", { loop: true, volume: 0.5 });
        this.gameMusic.play();
      }

      // Stop game.wav when gameplay starts
      this.input.keyboard.once("keydown-SPACE", () => {
        if (this.gameMusic) {
          this.gameMusic.stop();
        }

        // Start arcade.wav
        this.arcadeMusic = this.sound.add("arcade", { loop: true, volume: 0.5 });
        this.arcadeMusic.play();
      });
    
      this.rug = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, "rug").setOrigin(0, 0);

      this.pepe = this.physics.add.sprite(100, 300, "pepe");
      this.pepe.setFlipX(true);
      this.pepe.setScale(0.5);
      this.pepe.setCollideWorldBounds(true);
      this.pepe.body.setGravityY(600);
      this.pepe.body.setSize(this.pepe.width * 0.4, this.pepe.height * 0.5); // Smaller hitbox
      this.pepe.body.setOffset(this.pepe.width * 0.3, this.pepe.height * 0.25);

      this.obstacles = this.physics.add.group();
      this.tokens = this.physics.add.group();
      this.powerups = this.physics.add.group();
      this.specialPowerups = this.physics.add.group();

      this.cursors = this.input.keyboard.createCursorKeys();
      this.input.keyboard.on("keydown", (event) => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(event.code)) {
          event.preventDefault();
        }
      });

      this.score = 0;
      this.speed = 420; // Initial speed
      this.reversedControls = false; // For Elon Musk event
      this.specialPowerActive = false; // For Bath Water powerup
      this.scoreText = this.add.text(10, 10, "Score: 0", { fontSize: "32px", fill: "#fff" });

      // Score increments every second
      this.time.addEvent({
        delay: 1000,
        callback: () => {
          this.score += 1;
          this.scoreText.setText("Score: " + this.score);
        },
        loop: true,
      });

      // Gradually increase speed
      this.time.addEvent({
        delay: 4000,
        callback: () => {
          this.speed += 69;
        },
        loop: true,
      });

      // Spawn objects
      this.time.addEvent({ delay: 3000, callback: () => spawnObstacles(this), loop: true });
      this.time.addEvent({ delay: 2000, callback: () => spawnTokens(this), loop: true });
      this.time.addEvent({ delay: 30000, callback: () => spawnPowerups(this), loop: true });
      this.time.addEvent({ delay: 45000, callback: () => spawnSpecialPowerups(this), loop: true });
      this.time.addEvent({ delay: 80000, callback: () => elonMuskEvent(this), loop: true });

      // Collisions
      this.physics.add.collider(this.pepe, this.obstacles, (pepe, obstacle) => {
        if (this.specialPowerActive) {
          obstacle.destroy();
          this.score += 69; // Gain 69 points when eating FUD
        } else {
          gameOver(this);
        }
      });
      this.physics.add.overlap(this.pepe, this.tokens, (pepe, token) => collectToken(this, token), null, this);
      this.physics.add.overlap(this.pepe, this.powerups, (pepe, powerup) => collectPowerup(this, powerup), null, this);
      this.physics.add.overlap(this.pepe, this.specialPowerups, (pepe, powerup) => collectSpecialPowerup(this, powerup), null, this);
    }

    function update() {
      this.rug.tilePositionX += 6;

      // Handle controls (normal or reversed)
      if (this.reversedControls) {
        if (this.cursors.up.isDown) {
          this.pepe.setVelocityY(300); // Reversed: Up moves down
        } else if (this.cursors.down.isDown) {
          this.pepe.setVelocityY(-300); // Reversed: Down moves up
        } else {
          this.pepe.setVelocityY(0);
        }
      } else {
        if (this.cursors.up.isDown) {
          this.pepe.setVelocityY(-200); // Normal: Up moves up
        } else if (this.cursors.down.isDown) {
          this.pepe.setVelocityY(200); // Normal: Down moves down
        } else {
          this.pepe.setVelocityY(0);
        }
      }
    }

    function spawnObstacles(scene) {
      const yPosition = Phaser.Math.Between(50, scene.scale.height - 50);
      const obstacle = scene.obstacles.create(scene.scale.width, yPosition, "fud-cloud");
      obstacle.setVelocityX(-scene.speed);
      obstacle.setScale(0.5);
    }

    function spawnTokens(scene) {
      const yPosition = Phaser.Math.Between(50, scene.scale.height - 50);
      const token = scene.tokens.create(scene.scale.width, yPosition, "diamond-hands");
      token.setVelocityX(-scene.speed * 0.75);
      token.setScale(0.3);
    }

    function spawnPowerups(scene) {
      const yPosition = Phaser.Math.Between(50, scene.scale.height - 50);
      const powerup = scene.powerups.create(scene.scale.width, yPosition, "chillguy");
      powerup.setVelocityX(-scene.speed * 0.5);
      powerup.setScale(0.4);
    }

    function spawnSpecialPowerups(scene) {
      const yPosition = Phaser.Math.Between(50, scene.scale.height - 50);
      const specialPowerup = scene.specialPowerups.create(scene.scale.width, yPosition, "bath-water");
      specialPowerup.setVelocityX(-scene.speed * 0.4);
      specialPowerup.setScale(0.4);
    }

    function elonMuskEvent(scene) {
      scene.reversedControls = !scene.reversedControls; // Reverse controls
      const elon = scene.add.sprite(scene.scale.width / 2, scene.scale.height / 2, "elon-musk").setScale(0.6);
      const text = scene.add.text(scene.scale.width / 2, scene.scale.height / 2 + 50, "I TWEET, CONTROLS CHANGE!", {
        fontSize: "24px",
        fill: "#ff0000",
      }).setOrigin(0.5);

        // Play Elon sound
        const elonSound = scene.sound.add("elon");
        elonSound.play();

      scene.time.delayedCall(3000, () => {
        elon.destroy();
        text.destroy();
      });
    }

    function collectToken(scene, token) {
      token.destroy();
      scene.score += 10;
      scene.scoreText.setText("Score: " + scene.score);
      const collectSound = scene.sound.add("collect");
      collectSound.play();
    }

    function collectPowerup(scene, powerup) {
      powerup.destroy();
      scene.score += 100; // Add 100 points
      scene.speed *= 0.7; // Slow the game down by 30%
      scene.scoreText.setText("Score: " + scene.score);
    
      const chillSound = scene.sound.add("chill");
      chillSound.play();
    
      // Cap the speed reduction to avoid it becoming too slow
      if (scene.speed < 150) {
        scene.speed = 150; // Set a minimum speed
      }
    }

    function collectSpecialPowerup(scene, powerup) {
      powerup.destroy();
      scene.specialPowerActive = true; // Activate special power
      scene.pepe.setTint(0x00ff00); // Flash green

      const girlSound = scene.sound.add("girl");
      girlSound.play();    

      scene.time.delayedCall(10000, () => {
        scene.specialPowerActive = false;
        scene.pepe.clearTint(); // Remove green tint
      });
    }

    function gameOver(scene) {
      endGame(scene);
    }

    function endGame(scene) {
      scene.physics.pause(); // Pause the game
      if (scene.arcadeMusic) {
        scene.arcadeMusic.stop(); // Stop the arcade music
      }
      setFinalScore(scene.score); // Save the final score
      setGameOver(true); // Show the Game Over screen
    }

    return () => {
      game.destroy(true);
    };
  }, [gameStarted]);

  return (
    <>
      {!gameStarted && !gameOver && <WelcomeScreen onStart={handleStartGame} />}
      {gameStarted && !gameOver && <div ref={gameRef} style={{ width: "100%", height: "100%" }} />}
      {gameOver && <GameOverScreen score={finalScore} onRestart={handleStartGame} />}
    </>
  );
};

export default RugEscapeGame;
