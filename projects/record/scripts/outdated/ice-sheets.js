function createIceSheets(YEARS, YEARMARKINGS, WIDTH, HEIGHT) {

	const ICECANVAS = document.getElementById('ice-canvas');
	ICECANVAS.style.height = HEIGHT + "px";
	ICECANVAS.style.width = WIDTH + "px";
	const SVGL = "http://www.w3.org/2000/svg";

	// finds the minimum and maximum ice sheet number in the list of data
	function findMinMax() {
		var min = Number.POSITIVE_INFINITY;
		var max = Number.NEGATIVE_INFINITY;
		for (var i = 0; i < YEARS.length; i++) {
			var level = YEARS[i].iceSheets;
			if (level < min) {
				min = level;
			}
			if (level > max) {
				max = level;
			}
		}
		return [min, max];
	}

	// creates an array storing the minimum and maximum values
	const MINMAX = findMinMax();

	// stores the list containing the scaled ice sheet levels correlating the height of the viewport
	var scaledLevels = [];

	// creates a list containing the scaled ice sheet level to correlate to the height of the viewport
	for (var i = 0; i < YEARS.length; i++) {
		var year = YEARS[i];
		var scaledLevel = scaleNumber(year.iceSheets);
		scaledLevels.push(Math.round(scaledLevel));
	}

	// the function that scales the input sea-level to match the range dictated by the height of the viewport
	function scaleNumber(level) {
		var heightMin = HEIGHT * 0.95;
		var heightMax = HEIGHT * 0.65;

		var levelMinMaxPercent = MINMAX[1] - MINMAX[0];
		var heightPercent = heightMax - heightMin;

		var levelPercent = ((level - MINMAX[0]) / levelMinMaxPercent);
		var scaled = (levelPercent * heightPercent) + heightMin;

		return scaled;
	}

	// creates and appends a line element to the sea-canvas svg for each of the sea level data points
	for (var i = 0; i < (YEARS.length - 1); i++) {
		var line = document.createElementNS(SVGL, 'line');
		line.setAttributeNS(null, "x1", Math.floor(YEARMARKINGS[i]));
		line.setAttributeNS(null, "y1", scaledLevels[i]);
		line.setAttributeNS(null, "x2", Math.ceil(YEARMARKINGS[i + 1]));
		line.setAttributeNS(null, "y2", scaledLevels[i + 1]);
		line.setAttributeNS(null, "style", "stroke:rgb(0,0,0); stroke-width:10; z-index: 10;");
		ICECANVAS.appendChild(line);
	}



}