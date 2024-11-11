export class Context {
	constructor(container, width, height) {
		this.container = container;
        this.container.style.width = `${width}px`;
        this.container.style.height = `${height}px`;
		this.fillStyle = "white";
	}
	fillRect(x, y, w, h) {
		const rectangle = document.createElement("div");
		let rect = rectangle.style;
		rect.background = this.fillStyle;
		rect.left = x + 'px';
		rect.top = y + 'px';
		rect.width = w + 'px';  
		rect.height = h + 'px';
		rect.position = "absolute";
		this.container.appendChild(rectangle);
	}
    clearRect(container) {
        container.innerHTML = ''
    }
}
