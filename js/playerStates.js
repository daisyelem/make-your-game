class PlayerState {
	constructor(state, game) {
		this.state = state;
		this.game = game;
	}
}

export class Stationary extends PlayerState {
	constructor(game) {
		super("stationary", game);
	}
	enter() {
		this.game.player.speed = 0;
	}
	handleInput(input) {
		if (input.includes("ArrowLeft")) {
			this.game.player.setState("moveLeft");
		} else if (input.includes("ArrowRight")) {
			this.game.player.setState("moveRight");
		} else if (input.includes("p")) {
			this.game.player.setState("paused");
		} else if (this.game.gameOver) {
			this.game.player.setState("gameOver");
		}
	}
}

export class MoveLeft extends PlayerState {
	constructor(game) {
		super("moveLeft", game);
	}
	enter() {
		this.game.player.speed = -5;
	}
	handleInput(input) {
		if (!input.includes("ArrowLeft") && !input.includes("ArrowRight")) {
			this.game.player.setState("stationary");
		} else if (input.includes("ArrowRight")) {
			this.game.player.setState("moveRight");
		} else if (input.includes("p")) {
			this.game.player.setState("paused");
		} else if (this.game.gameOver) {
			this.game.player.setState("gameOver");
		}
	}
}

export class MoveRight extends PlayerState {
	constructor(game) {
		super("moveRight", game);
	}
	enter() {
		this.game.player.speed = 5;
	}
	handleInput(input) {
		if (!input.includes("ArrowLeft") && !input.includes("ArrowRight")) {
			this.game.player.setState("stationary");
		} else if (input.includes("ArrowLeft")) {
			this.game.player.setState("moveLeft");
		} else if (input.includes("p")) {
			this.game.player.setState("paused");
		} else if (this.game.gameOver) {
			this.game.player.setState("gameOver");
		}
	}
}

export class GameOver extends PlayerState {
	constructor(game) {
		super("GameOver", game);
	}
	enter() {
		this.game.speed = 0;
		this.game.player.speed = 0;
	}
	handleInput(input) {
		if (input.includes("r")) {
			this.game.restart();
		}
	}
}

export class Paused extends PlayerState {
	constructor(game) {
		super("Paused", game);
	}
	enter() {
		this.game.Paused = true;
		this.game.oldSpeed = this.game.speed;
		this.game.speed = 0;
		this.game.player.speed = 0;
	}
	handleInput(input) {
		if (input.includes("r")) {
			this.game.restart();
		} else if (input.includes("c")) {
			this.game.Paused = false;
			this.game.player.setState("stationary");
			this.game.speed = this.game.oldSpeed;
		}
	}
}

