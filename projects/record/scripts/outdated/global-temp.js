function createGlobalTemp(YEARS, YEARMARKINGS, BODY, WIDTH, HEIGHT) {

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

	for (var i = 0; i < (YEARS.length - 1); i++) {
		var scaledRGB1 = scaleRGB(YEARS[i].globalTemp);
		var scaledRGB2 = scaleRGB(YEARS[i + 1].globalTemp);

		var leftRGB = "rgb(" + scaledRGB1[0] + "," + scaledRGB1[1] + "," + scaledRGB1[2] + ")";
		var rightRGB = "rgb(" + scaledRGB2[0] + "," + scaledRGB2[1] + "," + scaledRGB2[2] + ")";

		var box = document.createElement("div");
		box.style.height = HEIGHT + "px";
		box.style.width = Math.ceil(YEARMARKINGS[i + 1] - YEARMARKINGS[i] + 10) + "px";

		box.style.position = "absolute";
		box.style.top = "0px";
		box.style.left = Math.floor(YEARMARKINGS[i]) + "px";
		box.style.zIndex = "-1";

		var bgColor = "linear-gradient(to left, " + rightRGB + ", " + leftRGB + ")";

		box.style.background = bgColor;

		BODY.appendChild(box);
	}

}