const CODES = {
	A: 65,
	Z: 90
}

function toCell() {
	return `
		<div class="cell" contenteditable></div>
	`
}

function createCol(col) {
	return `
		<div class="column">${col}</div>
	`
}

function createRow(index, content) {
	return `
		<div class="row">
			<div class="row-info">${index ? index :''}</div>
			<div class="row-data">${content}</div>
		</div>
	`
}

export function createTable(rowsCount = 25) {
	const colsCounts = CODES.Z - CODES.A + 1
	const rows = []

	const cols = new Array(colsCounts)
		.fill('')
		.map((el, index) => {
			return String.fromCharCode(CODES.A + index)
		})
		.map((el) => {
			return createCol(el)
		})
		.join('')

	rows.push(createRow(null, cols))

	for (let i = 0; i < rowsCount; i++) {
		const cells = new Array(colsCounts)
			.fill('')
			.map(toCell)
			.join('')
			console.log(cells);
		rows.push(createRow(i + 1, cells))
	}

	return rows.join('')
}