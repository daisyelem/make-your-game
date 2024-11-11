class Enemy {
	constructor(game, x, y, row) {
		this.game = game;
		this.markedForDeletion = false;
		this.width = 64;
		this.height = 64;
		this.x = x;
		this.y = y;
		this.row = row;
	}
	draw(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	}
	update(deltaTime, newPosX, newPosY) {
		this.x = newPosX;
		this.y = newPosY;
	}
}

class TopEnemy extends Enemy {
	constructor(game, x, y, row) {
		super(game, x, y, row);
		this.color = "red";
	}
}

class MiddleEnemy extends Enemy {
	constructor(game, x, y, row) {
		super(game, x, y, row);
		this.color = "yellow";
	}
}

class BottomEnemy extends Enemy {
	constructor(game, x, y, row) {
		super(game, x, y, row);
		this.color = "blue";
	}
}

class EmptyEnemy extends Enemy {
	constructor(game, x, y, row) {
		super(game, x, y, row);
	}
}

export class EnemyColumn {
	constructor(game, column) {
		this.game = game;
		this.x = column * (64 + 10);
		this.col = [
			new TopEnemy(this.game, this.x, 0, 0),
			new MiddleEnemy(this.game, this.x, 64 + 10, 1),
			new MiddleEnemy(this.game, this.x, 2 * (64 + 10), 2),
			new BottomEnemy(this.game, this.x, 3 * (64 + 10), 3),
			new BottomEnemy(this.game, this.x, 4 * (64 + 10), 4),
		];
		this.rightEdge = false;
		this.leftEdge = false;
		this.markedForDeletion = false;
	}
	draw(context) {
		this.col.forEach((enemy) => {
			enemy.draw(context);
		});
	}
	update(deltaTime) {
		if (this.col.length === 0 && (this.rightEdge || this.leftEdge))
			this.markedForDeletion = true;
		if (this.game.direction === "left" && this.leftEdge && this.x <= 0) {
			this.game.speed *= -1;
			this.game.direction = "right";
			this.game.enemyHeight += 8;
		}
		this.x += this.game.speed;
		if (
			this.game.direction === "right" &&
			this.rightEdge &&
			this.x + 64 >= this.game.width
		) {
			this.game.speed *= -1;
			this.game.direction = "left";
			this.game.enemyHeight += 8;
		}
		this.col = this.col.filter((enemy) => !enemy.markedForDeletion);
		this.col.forEach((enemy) => {
			enemy.update(
				deltaTime,
				this.x,
				this.game.enemyHeight + enemy.row * (64 + 10)
			);
		});
	}
}
