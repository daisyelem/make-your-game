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
		}
	}
}

export class MoveLeft extends PlayerState {
	constructor(game) {
		super("moveLeft", game);
	}
	enter() {
		this.game.player.speed = -2;
	}
	handleInput(input) {
		if (!input.includes("ArrowLeft") && !input.includes("ArrowRight")) {
			this.game.player.setState("stationary");
		} else if (input.includes("ArrowRight")) {
			this.game.player.setState("moveRight");
		}
	}
}

export class MoveRight extends PlayerState {
	constructor(game) {
		super("moveRight", game);
	}
	enter() {
		this.game.player.speed = 2;
	}
	handleInput(input) {
		if (!input.includes("ArrowLeft") && !input.includes("ArrowRight")) {
			this.game.player.setState("stationary");
		} else if (input.includes("ArrowLeft")) {
			this.game.player.setState("moveLeft");
		}
	}
}
