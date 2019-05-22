function showSeaLevel(YEARS) {

	const CANVAS = $("#canvas")[0];
	const WAVESIMG = $("#wave")[0];

	var width = $(CANVAS).width();
	var height = $(CANVAS).height();

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
	var minMax = findMinMax();

	function scaleNumber(level) {
		var heightMax = height * 0.15;

		var levelMinMaxPercent = minMax[1] - minMax[0];
		var heightPercent = height - heightMax;

		var levelPercent = ((level - minMax[0]) / levelMinMaxPercent);
		var scaled = (levelPercent * heightPercent) + heightMax;

		return scaled;
	}

	var scaledLevels = [];
	YEARS.forEach(function(element) {
		var scaledLevel = scaleNumber(element.seaLevel);
		scaledLevels.push(Math.round(scaledLevel));
	});

	scaledLevels.forEach(function(element, index) {
		var clone = ($(WAVESIMG).clone())[0];

		var bottomVal = (index * 10) + "%";
		var top = (80 - (index * 10)) + "%";

		var zIndex = 50 - (index * 2);
		$(clone).removeAttr("id");

		$(clone).css({
			"top": top,
			"z-index": zIndex,
			"display": "none"
		});

		var className = ("data-year-waves" + index);
		$(clone).addClass(className);
		$(CANVAS).append(clone);

		if (index === 0) {
			$(clone).fadeIn();
		}
	});



}