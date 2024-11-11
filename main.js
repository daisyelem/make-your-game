import { Game } from "./js/game.js";

window.addEventListener("load", function () {
	const canvas = document.getElementById("canvas1");
	const ctx = canvas.getContext("2d");
	canvas.width = 1000;
	canvas.height = 700;

	const game = new Game(canvas.width, canvas.height)
	game.addEnemies();
	let lastTime = 0;
	
	function animate(timeStamp){
		let deltaTime = timeStamp - lastTime;
		lastTime = timeStamp;
		ctx.clearRect(0,0,canvas.width, canvas.height);
		game.draw(ctx);
		game.update(deltaTime);
		requestAnimationFrame(animate)
	}

	animate(0)
});
