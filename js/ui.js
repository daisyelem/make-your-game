// export class UI {
// 	constructor(game) {
// 		this.game = game;
// 		this.fontSize = 30;
// 		this.fontFamily = "Helvetica";
// 		this.fontColor = "lime";
// 	}
// 	draw(context) {
// 		if (this.game.Paused) {
// 			context.fillStyle = "rgba(0,0,0,0.75)";
// 			context.fillRect(0, 0, this.game.width, this.game.height);
// 			this.fontSize = 80;
// 			context.textAlign = "center";
// 			context.font = this.fontSize + "px " + this.fontFamily;
// 			context.fillStyle = "darkRed";
// 			context.fillText(
// 				"Paused",
// 				this.fontSize,
// 				this.game.width * 0.5 - 150 + 2,
// 				this.game.height * 0.5 - 140 + 2
// 			);
// 			context.fillStyle = "lime";
// 			context.fillText(
// 				"Paused",
// 				this.fontSize,
// 				this.game.width * 0.5 - 150,
// 				this.game.height * 0.5 - 140
// 			);
// 			this.fontSize = 40;
// 			context.fillStyle = "darkRed";
// 			context.fillText(
// 				"[c]ontinue",
// 				this.fontSize,
// 				this.game.width * 0.5 - 110 + 2,
// 				this.game.height * 0.5 - 50 + 2
// 			);
// 			context.fillStyle = "lime";
// 			context.fillText(
// 				"[c]ontinue",
// 				this.fontSize,
// 				this.game.width * 0.5 - 110,
// 				this.game.height * 0.5 - 50
// 			);
// 			this.fontSize = 40;
// 			context.fillStyle = "darkRed";
// 			context.fillText(
// 				"[r]estart",
// 				this.fontSize,
// 				this.game.width * 0.5 - 85 + 2,
// 				this.game.height * 0.5 + 2
// 			);
// 			context.fillStyle = "lime";
// 			context.fillText(
// 				"[r]estart",
// 				this.fontSize,
// 				this.game.width * 0.5 - 85,
// 				this.game.height * 0.5
// 			);
// 		}

// 		// game over messages
// 		if (this.game.gameOver) {
// 			if (this.game.win) {
// 				context.fillStyle = "rgba(0,0,0,0.75)";
// 				context.fillRect(0, 0, this.game.width, this.game.height);
// 				this.fontSize = 80;
// 				context.textAlign = "center";
// 				context.font = this.fontSize + "px " + this.fontFamily;
// 				context.fillStyle = "darkRed";
// 				context.fillText(
// 					"BIM!",
// 					this.fontSize,
// 					this.game.width * 0.5 - 150 + 2,
// 					this.game.height * 0.5 - 80 + 2
// 				);
// 				context.fillStyle = "lime";
// 				context.fillText(
// 					"BIM!",
// 					this.fontSize,
// 					this.game.width * 0.5 - 150,
// 					this.game.height * 0.5 - 80
// 				);
// 				this.fontSize = 40;
// 				context.fillStyle = "darkRed";
// 				context.fillText(
// 					"[r]estart",
// 					this.fontSize,
// 					this.game.width * 0.5 - 50 + 2,
// 					this.game.height * 0.5 + 2
// 				);
// 				context.fillStyle = "lime";
// 				context.fillText(
// 					"[r]estart",
// 					this.fontSize,
// 					this.game.width * 0.5 - 50,
// 					this.game.height * 0.5
// 				);
// 			} else {
// 				context.fillStyle = "rgba(0,0,0,0.75)";
// 				context.fillRect(0, 0, this.game.width, this.game.height);
// 				this.fontSize = 80;
// 				context.textAlign = "center";
// 				context.font = this.fontSize + "px " + this.fontFamily;
// 				context.fillStyle = "darkRed";
// 				context.fillText(
// 					"Oh Snap!",
// 					this.fontSize,
// 					this.game.width * 0.5 - 150 + 2,
// 					this.game.height * 0.5 - 80 + 2
// 				);
// 				context.fillStyle = "lime";
// 				context.fillText(
// 					"Oh Snap!",
// 					this.fontSize,
// 					this.game.width * 0.5 - 150,
// 					this.game.height * 0.5 - 80
// 				);
// 				this.fontSize = 40;
// 				context.fillStyle = "darkRed";
// 				context.fillText(
// 					"[r]estart",
// 					this.fontSize,
// 					this.game.width * 0.5 - 50 + 2,
// 					this.game.height * 0.5 + 2
// 				);
// 				context.fillStyle = "lime";
// 				context.fillText(
// 					"[r]estart",
// 					this.fontSize,
// 					this.game.width * 0.5 - 50,
// 					this.game.height * 0.5
// 				);
// 			}
// 		}
// 		this.fontSize = 20;
// 		context.textAlign = "left";
// 		context.fillStyle = this.fontColor;
// 		//score
// 		context.fillText("SCORE: " + this.game.score, this.fontSize, 20, 10);
//         context.fillText("Level: " + this.game.currentGame, this.fontSize, 200, 10);
// 		//timer
// 		this.fontSize *= 0.8;
// 		context.fillText(
// 			"Time: " + (this.game.time * 0.001).toFixed(0),
// 			this.fontSize,
// 			20,
// 			40
// 		);
// 		//lives
// 		context.textAlign = "right";
// 		for (let i = 0; i < this.game.lives; i++) {
// 			context.fillRect(
// 				this.game.width - (i + 1) * (20 + 5) - 10,
// 				10,
// 				20,
// 				30
// 			);
// 		}
// 	}
// }

export class UI {
	constructor(game) {
		this.game = game;
	}
	draw(context) {
		if (this.game.startScreen) {
			context.fillStyle = "rgba(0,0,0,0.75)";
			context.fillRect(0, 0, this.game.width, this.game.height);
			context.font = "60px Audiowide";
			context.textAlign = "center";
			context.textBaseline = "bottom";
			context.fillStyle = "navy";
			context.fillText(
				"Get Ready To Play!",
				this.game.width / 2 + 3,
				this.game.height / 2 + 3 - 10
			);
			context.fillStyle = "lime";
			context.fillText(
				"Get Ready To Play!",
				this.game.width / 2,
				this.game.height / 2 - 10
			);
			context.font = "40px Audiowide";
			context.textBaseline = "top";
			context.fillStyle = "navy";
			context.fillText(
				"[S]tart",
				this.game.width / 2 + 3,
				this.game.height / 2 + 3 + 10
			);
			context.fillStyle = "lime";
			context.fillText(
				"[S]tart",
				this.game.width / 2,
				this.game.height / 2 + 10
			);
		} else if (this.game.paused) {
			context.fillStyle = "rgba(0,0,0,0.75)";
			context.fillRect(0, 0, this.game.width, this.game.height);
			context.font = "60px Audiowide";
			context.textAlign = "center";
			context.textBaseline = "bottom";
			context.fillStyle = "navy";
			context.fillText(
				"Paused",
				this.game.width / 2 + 3,
				this.game.height / 2 + 3 - 50
			);
			context.fillStyle = "lime";
			context.fillText(
				"Paused",
				this.game.width / 2,
				this.game.height / 2 - 50
			);
			context.font = "40px Audiowide";
			context.fillStyle = "navy";
			context.fillText(
				"[C]ontinue",
				this.game.width / 2 + 3,
				this.game.height / 2 + 3
			);
			context.fillStyle = "lime";
			context.fillText(
				"[C]ontinue",
				this.game.width / 2,
				this.game.height / 2
			);

			context.textBaseline = "top";
			context.fillStyle = "navy";
			context.fillText(
				"[R]estart",
				this.game.width / 2 + 3,
				this.game.height / 2 + 3 + 15
			);
			context.fillStyle = "lime";
			context.fillText(
				"[R]estart",
				this.game.width / 2,
				this.game.height / 2 + 15
			);
		} else if (this.game.gameWin) {
			context.fillStyle = "rgba(0,0,0,0.75)";
			context.fillRect(0, 0, this.game.width, this.game.height);
			context.font = "60px Audiowide";
			context.textAlign = "center";
			context.textBaseline = "bottom";
			context.fillStyle = "navy";
			context.fillText(
				"Congratulations!",
				this.game.width / 2 + 3,
				this.game.height / 2 + 3 - 10
			);
			context.fillStyle = "lime";
			context.fillText(
				"Congratulations!",
				this.game.width / 2,
				this.game.height / 2 - 10
			);
			context.font = "40px Audiowide";
			context.textBaseline = "top";
			context.fillStyle = "navy";
			context.fillText(
				"[R]estart",
				this.game.width / 2 + 3,
				this.game.height / 2 + 3 + 10
			);
			context.fillStyle = "lime";
			context.fillText(
				"[R]estart",
				this.game.width / 2,
				this.game.height / 2 + 10
			);
		} else if (this.game.gameOver) {
			context.fillStyle = "rgba(0,0,0,0.75)";
			context.fillRect(0, 0, this.game.width, this.game.height);
			context.font = "60px Audiowide";
			context.textAlign = "center";
			context.textBaseline = "bottom";
			context.fillStyle = "navy";
			context.fillText(
				"Game Over!",
				this.game.width / 2 + 3,
				this.game.height / 2 + 3 - 10
			);
			context.fillStyle = "lime";
			context.fillText(
				"Game Over!",
				this.game.width / 2,
				this.game.height / 2 - 10
			);
			context.font = "40px Audiowide";
			context.textBaseline = "top";
			context.fillStyle = "navy";
			context.fillText(
				"[R]estart",
				this.game.width / 2 + 3,
				this.game.height / 2 + 3 + 10
			);
			context.fillStyle = "lime";
			context.fillText(
				"[R]estart",
				this.game.width / 2,
				this.game.height / 2 + 10
			);
		}
		context.font = "20px Audiowide";
		context.textAlign = "left";
		context.textBaseline = "bottom";
		context.fillStyle = "navy";
		context.fillText(`Score: ${this.game.score}`, 20 + 2, 40 + 2);
		context.fillStyle = "lime";
		context.fillText(`Score: ${this.game.score}`, 20, 40);
		context.textBaseline = "top";
		context.fillStyle = "navy";
		context.fillText(`Time: ${this.game.timer}`, 20 + 2, 50 + 2);
		context.fillStyle = "lime";
		context.fillText(`Time: ${this.game.timer}`, 20, 50);
		context.textBaseline = "bottom";
		context.fillStyle = "navy";
		context.fillText(
			`Lives: `,
			this.game.width - 80 - this.game.player.lives * 30 + 2,
			40 + 2
		);
		context.fillStyle = "lime";
		context.fillText(
			`Lives:`,
			this.game.width - 80 - this.game.player.lives * 30,
			40
		);
		context.textBaseline = "top";
		context.fillStyle = "navy";
		context.fillText(
			`Level:  ${this.game.level}`,
			this.game.width - 83 - this.game.player.lives * 30 + 2,
			50 + 2
		);
		context.fillStyle = "lime";
		context.fillText(
			`Level:  ${this.game.level}`,
			this.game.width - 83 - this.game.player.lives * 30,
			50
		);
		for (let i = 0; i < this.game.player.lives; i++) {
			context.fillStyle = "navy";
			context.fillRect(this.game.width - 30 - i * 30 + 2, 18 + 2, 20, 20);
			context.fillStyle = "lime";
			context.fillRect(this.game.width - 30 - i * 30, 18, 20, 20);
		}
	}
}
