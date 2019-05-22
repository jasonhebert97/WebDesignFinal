function createSeaLevel(YEARS, YEARMARKINGS, WIDTH, HEIGHT) {

	const SEACANVAS = document.getElementById('sea-canvas');
	SEACANVAS.style.height = HEIGHT + "px";
	SEACANVAS.style.width = WIDTH + "px";
	const SVGL = "http://www.w3.org/2000/svg";

	// finds the minimum and maximum sea level number in the list of data
	function findMinMax() {
		var min = Number.POSITIVE_INFINITY;
		var max = Number.NEGATIVE_INFINITY;
		for (var i = 0; i < YEARS.length; i++) {
			var level = YEARS[i].seaLevel;
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
	var minMax = findMinMax();

	// stores the list containing the scaled sea levels correlating the height
	// of the viewport
	var scaledLevels = [];

	// creates a list containing the scaled sea levels to correlate to the height of the viewport
	for (var i = 0; i < YEARS.length; i++) {
		var year = YEARS[i];
		var scaledLevel = scaleNumber(year.seaLevel);
		scaledLevels.push(Math.round(scaledLevel));
	}

	// the function that scales the input sea-level to match the range dictated by the height of the viewport
	function scaleNumber(level) {
		var heightMin = HEIGHT * 0.75;
		var heightMax = HEIGHT * 0.25;

		var levelMinMaxPercent = minMax[1] - minMax[0];
		var heightPercent = heightMax - heightMin;

		var levelPercent = ((level - minMax[0]) / levelMinMaxPercent);
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
		line.setAttributeNS(null, "style", "stroke:rgb(255,255,255);stroke-width:5;z-index: 10;");
		SEACANVAS.appendChild(line);
	}

};