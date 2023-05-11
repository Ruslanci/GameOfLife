import { initGeneration, newGeneration } from "./utils/generators.js";

import { refreshWorld } from "./utils/draw.js";

let intervalId = null;
window.arr = new Array();
window.height = 0;
window.width = 0;
window.ALIVE_COLOR = "#73A657";
window.DEAD_COLOR = "#373737";


window.newWorld = function newWorld() {
	stop();
	height = parseInt(document.getElementById("height").value);
	width = parseInt(document.getElementById("width").value);
	initGeneration(0);
	refreshWorld();
}

window.next = function next() {
	let changed_cells = newGeneration();
	refreshWorld(changed_cells);
}

window.go = function go() {
	if (!intervalId) {
		intervalId = setInterval(function() {
			next();
		}, 60);
	}
}

window.stop = function stop() {
	clearInterval(intervalId);
	intervalId = null;
}

window.random = function random() {
	stop();
	initGeneration(2);
	refreshWorld();
}

window.changeCell = function changeCell(elem) {
	let x = parseInt(elem.getAttribute("x"));
	let y = parseInt(elem.getAttribute("y"));

	arr[x][y]["isAlive"] = !arr[x][y]["isAlive"];
	let changed_cells = [[x, y]]

	refreshWorld(changed_cells);
}



