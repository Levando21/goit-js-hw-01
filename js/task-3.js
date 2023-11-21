/** @format */

function getElementWidth(content, padding, border) {
	let resultWidth = content + padding * 2 + border * 2;
	let resultWidthPx = resultWidth + "px";
	return resultWidthPx;
}

console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 74
console.log(getElementWidth(200, 0, 0)); // 200
