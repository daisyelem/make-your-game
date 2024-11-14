import { EnemyBullet } from "./bullets.js";
class Enemy {
	constructor(game, row, column, height) {
		this.game = game;
		this.markedForDeletion = false;
		this.column = column;
		this.row = row;
		this.height = height;
	}
	draw(context) {
		context.fillStyle = "rgba(255,255,255,0.2)";
		context.fillRect(this.x, this.y, this.width, this.height);
		context.drawImage(
			this.image,
			this.frameX * this.width,
			0,
			this.x,
			this.y,
			this.width,
			this.height
		);
	}
	update(deltaTime, newPosX, newPosY) {
		this.x = newPosX + this.xOffset;
		this.y = newPosY;
		if (this.frameTimer > this.frameInterval) {
			if (this.frameX < this.maxFrame) this.frameX++;
			else this.frameX = 0;
			this.frameTimer = 0;
		}
		this.frameTimer += deltaTime;
	}
}

class TopEnemy extends Enemy {
	constructor(game, row, column, height) {
		super(game, row, column, height);
		this.image = "./assets/Glowy.png";
		this.color = "yellow";
		this.width = 64;
		this.xOffset = 16;
		this.yOffset = 0;
		this.x = this.column.x + this.xOffset;
		this.y = this.row * (this.height + this.game.enemyGap);
		this.frameX = 0;
		this.maxFrame = 1;
		this.fps = Math.random() * 4 + 1;
		this.frameTimer = 0;
		this.frameInterval = 1000 / this.fps;
		this.score = 30;

		this.bulletChance = Math.random() * 100;
	}
}

class MiddleEnemy extends Enemy {
	constructor(game, x, y, row, height) {
		super(game, x, y, row, height);
		this.image = "./assets/Stripey.png";
		this.color = "blue";
		this.width = 80;
		this.xOffset = 8;
		this.yOffset = 0;
		this.x = this.column.x + this.xOffset;
		this.y = this.row * (this.height + this.game.enemyGap);
		this.frameX = 0;
		this.maxFrame = 1;
		this.fps = Math.random() * 4 + 1;
		this.frameTimer = 0;
		this.frameInterval = 1000 / this.fps;
		this.score = 20;

		this.bulletChance = Math.random() * 75;
	}
}

class BottomEnemy extends Enemy {
	constructor(game, x, y, row, height) {
		super(game, x, y, row, height);
		this.image = "./assets/Jumpy.png";
		this.color = "green";
		this.width = 96;
		this.xOffset = 0;
		this.yOffset = 0;
		this.x = this.column.x + this.xOffset;
		this.y = this.row * (this.height + this.game.enemyGap);
		this.frameX = 0;
		this.maxFrame = 1;
		this.fps = Math.random() * 4 + 1;
		this.frameTimer = 0;
		this.frameInterval = 1000 / this.fps;
		this.score = 10;

		this.bulletChance = Math.random() * 50;
	}
}

export class EnemyColumn {
	constructor(game, column) {
		this.game = game;
		this.enemyWidth = 96;
		this.enemyHeight = 64;
		this.column = column;
		this.x = this.column * (this.enemyWidth + this.game.enemyGap);
		this.col = [
			new TopEnemy(this.game, 0, this, this.enemyHeight),
			new MiddleEnemy(this.game, 1, this, this.enemyHeight),
			new MiddleEnemy(this.game, 2, this, this.enemyHeight),
			new BottomEnemy(this.game, 3, this, this.enemyHeight),
			new BottomEnemy(this.game, 4, this, this.enemyHeight),
		];
		this.rightEdge = false;
		this.leftEdge = false;
		this.markedForDeletion = false;
		this.bullets = [];
	}
	draw(context) {
		this.bullets.forEach((bullet) => bullet.draw(context));
		this.col.forEach((enemy) => {
			enemy.draw(context);
		});
	}
	update(deltaTime) {
		if (this.col.length === 0 && (this.rightEdge || this.leftEdge))
			this.markedForDeletion = true;
		if (this.game.direction === "left" && this.leftEdge && this.x <= 0) {
			this.game.speed *= -1;
			if (this.game.speed <= this.game.maxSpeed) {
				this.game.speed *= 1.1;
			}
			this.game.direction = "right";
			this.game.enemyTop += 8;
		}
		this.x += this.game.speed;
		if (
			this.game.direction === "right" &&
			this.rightEdge &&
			this.x + this.enemyWidth + this.game.enemyGap >= this.game.width
		) {
			this.game.speed *= -1;
			if (this.game.speed <= this.game.maxSpeed) {
				this.game.speed *= 1.1;
			}
			this.game.direction = "left";
			this.game.enemyTop += 8;
		}
		this.game.bulletTimer += deltaTime;
		this.col = this.col.filter((enemy) => !enemy.markedForDeletion);
		this.bullets = this.bullets.filter(
			(bullet) => !bullet.markedForDeletion
		);
		this.bullets.forEach((bullet) => {
			bullet.update(deltaTime);
			if (bullet.markedForDeletion) {
				this.game.currentBullets--
			}
		});
		this.col.forEach((enemy) => {
			if (
				enemy.bulletChance > Math.random() * 50 + 25 &&
				this.game.bulletTimer > this.game.bulletInterval &&
				this.bullets.length < 2 &&
				this.game.currentBullets < this.game.maxBullets
			) {
				this.bullets.push(new EnemyBullet(this.game, enemy));
				this.game.bulletTimer = 0;
				this.game.currentBullets++;
			}
			enemy.update(
				deltaTime,
				this.x,
				this.game.enemyTop +
					enemy.row * (this.enemyHeight + this.game.enemyGap)
			);
		});
	}
}
