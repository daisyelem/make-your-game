export class UI {
	constructor(game) {
		this.game = game;
		this.fontSize = 30;
		this.fontFamily = "Helvetica";
		this.fontColor = "lime";
	}
	draw(context) {
		if (this.game.Paused) {
			context.fillStyle = "rgba(0,0,0,0.75)";
			context.fillRect(0, 0, this.game.width, this.game.height);
			this.fontSize = 80;
			context.textAlign = "center";
			context.font = this.fontSize + "px " + this.fontFamily;
			context.fillStyle = "darkRed";
			context.fillText(
				"Paused",
				this.fontSize,
				this.game.width * 0.5 - 150 + 2,
				this.game.height * 0.5 - 140 + 2
			);
			context.fillStyle = "lime";
			context.fillText(
				"Paused",
				this.fontSize,
				this.game.width * 0.5 - 150,
				this.game.height * 0.5 - 140
			);
			this.fontSize = 40;
			context.fillStyle = "darkRed";
			context.fillText(
				"[c]ontinue",
				this.fontSize,
				this.game.width * 0.5 - 110 + 2,
				this.game.height * 0.5 - 50 + 2
			);
			context.fillStyle = "lime";
			context.fillText(
				"[c]ontinue",
				this.fontSize,
				this.game.width * 0.5 - 110,
				this.game.height * 0.5 - 50
			);
			this.fontSize = 40;
			context.fillStyle = "darkRed";
			context.fillText(
				"[r]estart",
				this.fontSize,
				this.game.width * 0.5 - 85 + 2,
				this.game.height * 0.5 + 2
			);
			context.fillStyle = "lime";
			context.fillText(
				"[r]estart",
				this.fontSize,
				this.game.width * 0.5 - 85,
				this.game.height * 0.5
			);
		}

		// game over messages
		if (this.game.gameOver) {
			if (this.game.win) {
				context.fillStyle = "rgba(0,0,0,0.75)";
				context.fillRect(0, 0, this.game.width, this.game.height);
				this.fontSize = 80;
				context.textAlign = "center";
				context.font = this.fontSize + "px " + this.fontFamily;
				context.fillStyle = "darkRed";
				context.fillText(
					"BIM!",
					this.fontSize,
					this.game.width * 0.5 - 150 + 2,
					this.game.height * 0.5 - 80 + 2
				);
				context.fillStyle = "lime";
				context.fillText(
					"BIM!",
					this.fontSize,
					this.game.width * 0.5 - 150,
					this.game.height * 0.5 - 80
				);
				this.fontSize = 40;
				context.fillStyle = "darkRed";
				context.fillText(
					"[r]estart",
					this.fontSize,
					this.game.width * 0.5 - 50 + 2,
					this.game.height * 0.5 + 2
				);
				context.fillStyle = "lime";
				context.fillText(
					"[r]estart",
					this.fontSize,
					this.game.width * 0.5 - 50,
					this.game.height * 0.5
				);
			} else {
				context.fillStyle = "rgba(0,0,0,0.75)";
				context.fillRect(0, 0, this.game.width, this.game.height);
				this.fontSize = 80;
				context.textAlign = "center";
				context.font = this.fontSize + "px " + this.fontFamily;
				context.fillStyle = "darkRed";
				context.fillText(
					"Oh Snap!",
					this.fontSize,
					this.game.width * 0.5 - 150 + 2,
					this.game.height * 0.5 - 80 + 2
				);
				context.fillStyle = "lime";
				context.fillText(
					"Oh Snap!",
					this.fontSize,
					this.game.width * 0.5 - 150,
					this.game.height * 0.5 - 80
				);
				this.fontSize = 40;
				context.fillStyle = "darkRed";
				context.fillText(
					"[r]estart",
					this.fontSize,
					this.game.width * 0.5 - 50 + 2,
					this.game.height * 0.5 + 2
				);
				context.fillStyle = "lime";
				context.fillText(
					"[r]estart",
					this.fontSize,
					this.game.width * 0.5 - 50,
					this.game.height * 0.5
				);
			}
		}
		this.fontSize = 20;
		context.textAlign = "left";
		context.fillStyle = this.fontColor;
		//score
		context.fillText("SCORE: " + this.game.score, this.fontSize, 20, 10);
        context.fillText("Level: " + this.game.currentGame, this.fontSize, 200, 10);
		//timer
		this.fontSize *= 0.8;
		context.fillText(
			"Time: " + (this.game.time * 0.001).toFixed(0),
			this.fontSize,
			20,
			40
		);
		//lives
		context.textAlign = "right";
		for (let i = 0; i < this.game.lives; i++) {
			context.fillRect(
				this.game.width - (i + 1) * (20 + 5) - 10,
				10,
				20,
				30
			);
		}
	}
}
