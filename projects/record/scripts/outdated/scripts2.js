// Waits until entire window is loaded to run script
window.onload = function() {

	const YEARS = createObjects();
	const BODY = document.getElementById("body");

	const WIDTH = BODY.clientWidth;
	const HEIGHT = BODY.clientHeight;

	BODY.style.height = HEIGHT + "px";
	BODY.style.width = WIDTH + "px";



	function createYearMarkings() {
		var tempArray = [];
		var increment = WIDTH / (YEARS.length - 1);

		for (var i = 0; i < YEARS.length; i++) {
			tempArray.push(increment * i);
		}
		return tempArray;
	}

	const YEARMARKINGS = createYearMarkings();






	createSeaLevel(YEARS, YEARMARKINGS, WIDTH, HEIGHT);
	createGlobalTemp(YEARS, YEARMARKINGS, BODY, WIDTH, HEIGHT);
	createIceSheets(YEARS, YEARMARKINGS, WIDTH, HEIGHT);



	function replaceVerticalScrollByHorizontal(event) {
		if (event.deltaY != 0) {
			// manually scroll horizonally instead
			window.scroll(window.scrollX + event.deltaY * 5, window.scrollY);
			// prevent vertical scroll
			event.preventDefault();
		}
		return;
	}

	/* Listener on window once we start scrolling, we run our function 💨 */
	window.addEventListener('wheel', replaceVerticalScrollByHorizontal);

};