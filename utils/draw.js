function drawWorld(table, changed_cells) {
	if (!changed_cells) {
		let result = "<tbody>";
		for (let i = 0; i < height; i++) {
			result += "<tr>";
			for (let j = 0; j < width; j++) {
				result += drawCell(arr[i][j]);
			}
			result +="</tr>";
		}
		result +="</tbody>";
		
		table.innerHTML = result;
	} else {
		for (let i = 0; i < changed_cells.length; i++) {
			let cell = arr[changed_cells[i][0]][changed_cells[i][1]];
			document.getElementById('cell-'+cell.x+'-'+cell.y).setAttribute("style", cell.isAlive ? `background:${ALIVE_COLOR};` : `background:${DEAD_COLOR};`);
		}
	}
}

function drawCell(cell) {
	return '<td><div'
		 	+ ' id=cell-'+cell.x+'-'+cell.y + ' x=' + cell.x + ' y=' + cell.y + (cell.isAlive ? ` style=background:${ALIVE_COLOR};` : ` style=background:${DEAD_COLOR};`)
		  	+ ' onclick="changeCell(this);">&nbsp;</div></td>';
}

export function refreshWorld(changed_cells = false) {
	let table = document.getElementById("world");
	drawWorld(table, changed_cells);
}