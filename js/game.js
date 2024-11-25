import { EnemyColumn } from "./enemies.js";
import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { UI } from "./ui.js";

export class Game {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.direction = "right";
		this.speed = 1;
		this.maxSpeed = 10;
		this.lives = 3;
		this.score = 0;
		this.time = 0;
		this.enemies = [];
		this.enemyCols = 11;
		this.enemyGap = 10;
		this.enemyTop = 75;
		this.lowestRow = 0;
		this.enemyHeight = 0;
		this.currentBullets = 0;
		this.maxBullets = 5;
		this.bottomMargin = 100;
		this.player = new Player(this);
		this.input = new InputHandler(this);
		this.gameOver = false;
		this.currentGame = 1;
		this.Paused = false;
		this.ui = new UI(this);
		this.oldSpeed = 0;
		this.bulletTimer = 0;
		this.bulletInterval = 5000;
		this.win = false;
		this.levelUp = false;
		this.drawOverlay = false;
	}
	draw(context) {
		//enemies
		this.enemies.forEach((column) => {
			column.draw(context);
		});
		// player
		this.player.draw(context);
		context.fillRect(0, this.height - this.bottomMargin, this.width, 2);
		this.ui.draw(context);
	}
	update(deltaTime) {
		if (this.lives === 0) this.gameOver = true;
		if (!this.gameOver && !this.Paused) this.time += deltaTime;
		this.player.update(this.input.keys, deltaTime);
		//enemies
		this.lowestRow = Math.max(
			...this.enemies.map((column) =>
				column.col.length == 0
					? 0
					: column.col[column.col.length - 1].row
			)
		);
		this.enemies = this.enemies.filter(
			(column) => !column.markedForDeletion
		);
		this.enemies.forEach((column) => {
			column.update(deltaTime);
		});
		if (this.enemies.length === 0) {
			if (this.currentGame > 2) {
				this.gameOver = true;
				this.win = true;
			} else {
				this.levelUp = true;
				this.restart();
			}
		}
		this.enemyHeight =
			this.enemyTop + this.lowestRow * (64 + this.enemyGap) + 64;
		if (this.enemyHeight > this.height - this.bottomMargin) {
			this.gameOver = true;
		}
		if (this.enemies.length > 0) {
			this.enemies[0].leftEdge = true;
			this.enemies[this.enemies.length - 1].rightEdge = true;
		}
	}
	addEnemies() {
		for (let i = 0; i < this.enemyCols; i++) {
			this.enemies.push(new EnemyColumn(this, i));
		}
		this.enemies[0].leftEdge = true;
		this.enemies[this.enemies.length - 1].rightEdge = true;
	}
	restart() {
		this.direction = "right";
		this.speed = 1;
		this.enemies = [];
		this.enemyCols = 11;
		this.enemyTop = 75;
		this.lowestRow = 0;
		this.enemyHeight = 0;
		this.player = new Player(this);
		this.gameOver = false;
		this.addEnemies();

		this.Paused = false;
		this.ui = new UI(this);
		this.oldSpeed = 0;
		this.currentBullets = 0;
		if (this.levelUp) {
			this.enemyTop += this.currentGame * 10;
			this.currentGame++;
			this.maxBullets++;
			this.bulletInterval -= 50;
			this.lives++;
			this.levelUp = false;
		} else {
			this.lives = 3;
			this.score = 0;
			this.time = 0;
			this.currentGame = 1;
		}
	}
}
