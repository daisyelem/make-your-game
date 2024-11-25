import { Game } from "./js/game.js";
import { Context } from "./js/context.js";

window.addEventListener("load", function () {
	const container = document.getElementById("container");
	let gameWidth = 1500;
	let gameHeight = 700;
	const ctx = new Context(container, gameWidth, gameHeight);

	const game = new Game(gameWidth, gameHeight);
	game.addEnemies();
	let lastTime = 0;

	function animate(timeStamp) {
		let deltaTime = timeStamp - lastTime;
		lastTime = timeStamp;
		if (!game.gameOver && !game.Paused) {
			ctx.clearRect();
			game.draw(ctx);

		}
		if (game.drawOverlay) {
			game.draw(ctx);
			game.drawOverlay = false;
		}
		
		game.update(deltaTime);
		requestAnimationFrame(animate);
	}

	animate(0);
});
