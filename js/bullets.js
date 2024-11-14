class Bullet {
	constructor(game, origin) {
		this.game = game;
		this.origin = origin;
		this.image = "./assets/FireBall.png";
		this.width = 16;
		this.height = 64;
		this.x = this.origin.x + this.origin.width / 2 - this.width / 2;
		this.y = this.origin.y;
		this.markedForDeletion = false;
		this.frameX = 0;
		this.maxFrame = 1;
		this.fps = 15;
		this.frameTimer = 0;
		this.frameInterval = 1000 / this.fps;
	}

	update(deltaTime) {
		if (this.game.Paused || this.game.gameOver) this.vy = 0;
		else this.vy = this.maxVy;
		this.y += this.vy;

		if (this.y + this.height < 0 || this.y > this.game.height)
			this.markedForDeletion = true;
	}
}

export class PlayerBullet extends Bullet {
	constructor(game, player) {
		super(game, player);
		this.maxVy = -20;
		this.vy = this.maxVy;
	}
	draw(context) {
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
	update(deltaTime) {
		super.update(deltaTime);
		if (this.frameTimer > this.frameInterval) {
			if (this.frameX < this.maxFrame) this.frameX++;
			else this.frameX = 0;
			this.frameTimer = 0;
		}
		this.frameTimer += deltaTime;
		this.game.enemies.forEach((column) => {
			column.col.forEach((enemy) => {
				if (
					enemy.x < this.x + this.width &&
					enemy.x + enemy.width > this.x &&
					enemy.y < this.y + this.height &&
					enemy.y + enemy.height > this.y
				) {
					enemy.markedForDeletion = true;
					this.markedForDeletion = true;
					this.game.score += enemy.score;
				}
			});
		});
	}
}

export class EnemyBullet extends Bullet {
	constructor(game, enemy) {
		super(game, enemy);
		this.maxVy = 5;
		this.vy = this.maxVy;
		this.color = enemy.color;
	}
	draw(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	}
	update(deltaTime) {
		super.update(deltaTime);
		if (
			this.game.player.x < this.x + this.width &&
			this.game.player.x + this.game.player.width > this.x &&
			this.game.player.y < this.y + this.height &&
			this.game.player.y + this.game.player.height > this.y
		) {
			this.markedForDeletion = true;
			this.game.lives--;
		} else if (
			this.game.player.bullets.length > 0 &&
			this.game.player.bullets[0].x < this.x + this.width &&
			this.game.player.bullets[0].x + this.game.player.bullets[0].width >
				this.x &&
			this.game.player.bullets[0].y < this.y + this.height &&
			this.game.player.bullets[0].y + this.game.player.bullets[0].height >
				this.y
		) {
			this.game.player.bullets[0].markedForDeletion = true;
			this.markedForDeletion = true;
		}
	}
}
