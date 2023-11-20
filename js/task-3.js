/** @format */

const text = "First Variant";
console.log(text);

function getElementWidth(content, padding, border) {
	let resultWidth =
		parseFloat(content) + parseFloat(padding * 2) + parseFloat(border * 2);
	let resultWidthPx = resultWidth + "px";
	return resultWidthPx;
}

console.log(getElementWidth("50", "8", "4")); // 74
console.log(getElementWidth("60", "12", "8.5")); // 101
console.log(getElementWidth("200", "0", "0")); // 200

const textTwo = "Second Variant";
console.log(textTwo);

function getElementWidth(content, padding, border) {
	let contentNpx = parseFloat(content);
	let paddingNpx = parseFloat(padding);
	let borderNpx = parseFloat(border);

	let resultWidth = contentNpx + paddingNpx * 2 + borderNpx * 2;
	let resultWidthPx = resultWidth + "px";
	return resultWidthPx;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
