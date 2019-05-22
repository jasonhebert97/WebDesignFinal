function showGlobalTemp(YEARS) {

	const RED = [230, 100, 101];
	const BLUE = [145, 152, 229];

	function findMinMax() {
		var min = Number.POSITIVE_INFINITY;
		var max = Number.NEGATIVE_INFINITY;
		for (var i = 0; i < YEARS.length; i++) {
			var level = YEARS[i].globalTemp;
			if (level < min) {
				min = level;
			}
			if (level > max) {
				max = level;
			}
		}
		return [min, max];
	}
	var minMax = findMinMax();

	function scaleRGB(temperature) {
		var redRange = RED[0] - BLUE[0];
		var greenRange = RED[1] - BLUE[1];
		var blueRange = RED[2] - BLUE[2];

		var tempMinMaxPercentage = minMax[1] - minMax[0];
		var tempPercent = (temperature - minMax[0]) / tempMinMaxPercentage;

		var scaledRed = Math.round((tempPercent * redRange) + BLUE[0]);
		var scaledGreen = Math.round((tempPercent * greenRange) + BLUE[1]);
		var scaledBlue = Math.round((tempPercent * blueRange) + BLUE[2]);

		var scaled = [scaledRed, scaledGreen, scaledBlue];
		return scaled;
	}

	var colorArr = [];

	YEARS.forEach(function(element) {
		colorArr.push(scaleRGB(element.globalTemp));
	});

	var rgbVal = "rgb(" + colorArr[0][0] + "," + colorArr[0][1] + "," + colorArr[0][2] + ")";
	$("#data-window").css("background-color", rgbVal);

	return colorArr;

}