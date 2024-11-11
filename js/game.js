import { EnemyColumn } from "./enemies.js";

export class Game {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.direction = "right";
		this.speed = 1;
		this.enemies = [];
		this.enemyCols = 11;
	}
	draw(context) {
		this.enemies.forEach((column) => {
			column.forEach((enemy) => {
				enemy.draw(context);
			});
		});
	}
	addEnemies() {
		for (let i = 0; i < this.enemyCols; i++) {
			this.enemies.push(new EnemyColumn());
		}
	}
}
