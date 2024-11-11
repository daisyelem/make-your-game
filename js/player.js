import { MoveLeft, MoveRight, Stationary } from "./playerStates.js";
import { PlayerBullet } from "./bullets.js";

export class Player {
	constructor(game) {
		this.game = game;
		this.width = 96;
		this.height = 64;
		this.x = (this.game.width - this.width) * 0.5;
		this.y = this.game.height - this.height;
		this.color = "lime";
		this.states = {
			stationary: new Stationary(this.game),
			moveLeft: new MoveLeft(this.game),
			moveRight: new MoveRight(this.game),
		};
		this.currentState = this.states.stationary;
		this.speed = 0;
		this.bullets = [];
		this.bulletTimer = 0;
		this.bulletInterval = 1000;
	}
	draw(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
		this.bullets.forEach((bullet) => {
			bullet.draw(context);
		});
	}
	update(input, deltaTime) {
		this.currentState.handleInput(input);
		this.x += this.speed;
		if (
			input.includes(" ") &&
			this.bullets.length < 1 &&
			this.bulletTimer > this.bulletInterval
		) {
			this.bullets.push(new PlayerBullet(this.game, this));
			this.bulletTimer = 0;
		} else this.bulletTimer += deltaTime
		this.bullets = this.bullets.filter(
			(bullet) => !bullet.markedForDeletion
		);
		this.bullets.forEach((bullet) => {
			bullet.update(deltaTime);
		});
	}
	setState(state) {
		this.currentState = this.states[state];
		this.currentState.enter();
	}
}
