export function initGeneration(n) {
	for (let i = 0; i < height; i++) {
		arr[i] = new Array();
		for (let j = 0; j < width; j++) {
			arr[i][j] = {
				isAlive: Boolean(getRandomInt(n)),
				x: i,
				y: j
			};
		}
	}
}
export function newGeneration() {
	let changed_cells = new Array();

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			let alive_cells = countAliveNeighbours(i, j);
			if (!arr[i][j].isAlive && alive_cells == 3) {
				changed_cells.push([i, j]);
			} else if (arr[i][j].isAlive && (alive_cells < 2 || alive_cells > 3)) {
				changed_cells.push([i, j]);
			}
		}
	}
	
	for (let i = 0; i < changed_cells.length; i++) {
		let changed_cell = arr[changed_cells[i][0]][changed_cells[i][1]];

		arr[changed_cells[i][0]][changed_cells[i][1]] = {
			isAlive: !changed_cell.isAlive,
			x: changed_cell.x,
			y: changed_cell.y
		};
	}
	return changed_cells;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function countAliveNeighbours(x, y) {
	let alive_cells = 0;
	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			if (i == 0 && j == 0) continue

			let neighbour_x = x + i;
			let neighbour_y = y + j;

			if (neighbour_x < 0) neighbour_x = height - 1;
			if (neighbour_x >= height) neighbour_x = 0;
			
			if (neighbour_y < 0) neighbour_y = width - 1;
			if (neighbour_y >= width) neighbour_y = 0;

			if (arr[neighbour_x][neighbour_y].isAlive) alive_cells++;
		}
	}
	return alive_cells;
}
