export class Context {
	constructor(container, width, height) {
		this.container = container;
		this.container.style.width = `${width}px`;
		this.container.style.height = `${height}px`;
		this.fillStyle = "white";
		this.textAlign = "left";
	}
	fillRect(x, y, w, h) {
		const rectangle = document.createElement("div");
		let rect = rectangle.style;
		rect.background = this.fillStyle;
		rect.left = x + "px";
		rect.top = y + "px";
		rect.width = w + "px";
		rect.height = h + "px";
		rect.position = "absolute";
		this.container.appendChild(rectangle);
	}
	clearRect() {
		this.container.innerHTML = "";
	}
	drawImage(src, sx, sy, x, y, w, h) {
		const rectangle = document.createElement("div");
		let rect = rectangle.style;
		rect.background = `url(${src})`;
		rect.backgroundPositionX = sx + "px";
		rect.backgroundPositionY = sy + "px";
		rect.left = x + "px";
		rect.top = y + "px";
		rect.width = w + "px";
		rect.height = h + "px";
		rect.position = "absolute";
		this.container.appendChild(rectangle);
	}
	fillText(text, fontSize, x, y) {
		const words = document.createElement("div");
		words.textContent = text;
		words.style.fontSize = fontSize + "px";
		words.style.color = this.fillStyle;
		words.style.left = x + "px";
		words.style.top = y + "px";
		words.style.position = "absolute";
		this.container.appendChild(words);
	}
}
