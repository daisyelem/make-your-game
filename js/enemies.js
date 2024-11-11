class Enemy {
	constructor(game, x, y) {
		this.game = game;
		this.markedForDeletion = false;
		this.width = 64;
		this.height = 64;
		this.x = x;
		this.y = y;
	}
	draw(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	}
	update(deltaTime) {
		this.x += this.game.speed;
	}
}

class TopEnemy extends Enemy {
	constructor(game, x, y) {
		super(game, x, y);
		this.color = "red";
	}
}

class MiddleEnemy extends Enemy {
	constructor(game, x, y) {
		super(game, x, y);
		this.color = "green";
	}
}

class BottomEnemy extends Enemy {
	constructor(game, x, y) {
		super(game, x, y);
		this.color = "blue";
	}
}

class EmptyEnemy extends Enemy {
	constructor(game, x, y) {
		super(game, x, y);
	}
}

export class EnemyColumn {
	constructor(game, column) {
		this.game = game;
		this.row = [
			new TopEnemy(this.game),
			new MiddleEnemy(this.game),
			new MiddleEnemy(this.game),
			new BottomEnemy(this.game),
			new BottomEnemy(this.game),
		];
		this.rightEdge = false;
		this.leftEdge = false;
	}
}
