function showC02Levels(YEARS) {

	const CANVAS = $("#canvas")[0];

	function findMinMax() {
		var min = Number.POSITIVE_INFINITY;
		var max = Number.NEGATIVE_INFINITY;
		for (var i = 0; i < YEARS.length; i++) {
			var level = YEARS[i].carbonDioxide;
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

	function scaleNumber(level) {
		var minOpac = 0;
		var maxOpac = 0.50;

		var levelMinMax = minMax[1] - minMax[0];
		var opacRange = maxOpac - minOpac;

		var levelPercent = ((level - minMax[0]) / levelMinMax);
		var scaled = (levelPercent * opacRange) + minOpac;

		return scaled;
	}

	var scaledLevels = [];
	YEARS.forEach(function(element, index) {
		var scaledLevel = scaleNumber(element.carbonDioxide);
		scaledLevels.push(scaledLevel);
	});

	return scaledLevels;







}