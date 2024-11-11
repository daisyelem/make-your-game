import { Game } from "./js/game.js";
import { Context } from "./js/context.js";

window.addEventListener("load", function () {
	const container = document.getElementById("container");
	let gameWidth = 1000;
	let gameHeight = 700;
	const ctx = new Context(container, gameWidth, gameHeight);

	const game = new Game(gameWidth, gameHeight);
	game.addEnemies();
	let lastTime = 0;

	function animate(timeStamp) {
		let deltaTime = timeStamp - lastTime;
		lastTime = timeStamp;
		ctx.clearRect(container);
		game.draw(ctx);
		game.update(deltaTime);
		requestAnimationFrame(animate);
	}

	animate(0);
});
