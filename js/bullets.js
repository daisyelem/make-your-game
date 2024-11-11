class Bullet {
	constructor(game, origin) {
		this.game = game;
		this.origin = origin;
		this.color = this.origin.color;
		this.width = 5;
		this.height = 20;
		this.x = this.origin.x + this.origin.width / 2;
		this.y = this.origin.y;
		this.markedForDeletion = false;
	}
	draw(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	}
	update(deltaTime) {
		this.y += this.vy;
		if (this.y + this.height < 0) this.markedForDeletion = true;
	}
}

export class PlayerBullet extends Bullet {
	constructor(game, player) {
		super(game, player);
		this.vy = -10;
	}
	update(deltaTime) {
		super.update(deltaTime);
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
				}
			});
		});
	}
}
