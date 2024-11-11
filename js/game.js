import { EnemyColumn } from "./enemies.js";
import { Player } from "./player.js";
import { InputHandler } from "./input.js";

export class Game {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.direction = "right";
		this.speed = 1;
		this.enemies = [];
		this.enemyCols = 11;
		this.enemyHeight = 0;
		this.player = new Player(this);
		this.input = new InputHandler(this);
	}
	draw(context) {
		//enemies
		this.enemies.forEach((column) => {
			column.draw(context);
		});
		// player
		this.player.draw(context);
	}
	update(deltaTime) {
		//enemies
		this.enemies = this.enemies.filter(
			(column) => !column.markedForDeletion
		);
		this.enemies.forEach((column) => {
			column.update(deltaTime);
		});
		//player
		this.enemies[0].leftEdge = true;
		this.enemies[this.enemies.length - 1].rightEdge = true;
		this.player.update(this.input.keys, deltaTime);
	}
	addEnemies() {
		for (let i = 0; i < this.enemyCols; i++) {
			this.enemies.push(new EnemyColumn(this, i));
		}
		this.enemies[0].leftEdge = true;
		this.enemies[this.enemies.length - 1].rightEdge = true;
	}
}
