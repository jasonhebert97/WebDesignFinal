function showIceLevel(YEARS) {

	const CANVAS = $("#canvas")[0];
	const ICEIMG = $("#ice")[0];

	var width = $(CANVAS).width();
	var height = $(CANVAS).height();

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
	var minMax = findMinMax();

	function scaleNumber(level) {
		var widthMin = width * 0.25;
		var widthMax = width * 0.55;

		var levelMinMaxPercent = minMax[1] - minMax[0];
		var widthRange = widthMax - widthMin;

		var levelPercent = ((level - minMax[0]) / levelMinMaxPercent);
		var scaled = (levelPercent * widthRange) + widthMin;

		return scaled;
	}

	var scaledLevels = [];
	YEARS.forEach(function(element) {
		var scaledLevel = scaleNumber(element.iceSheets);
		scaledLevels.push(Math.round(scaledLevel));
	});

	scaledLevels.forEach(function(element, index) {
		var clone = ($(ICEIMG).clone())[0];
		var bottomVal = (index * 10) + "%";
		$(clone).removeAttr("id");

		var widthVal = scaledLevels[index] + "px";
		var zIndex = 50 - (index * 2)
		$(clone).css({
			"bottom": bottomVal,
			"z-index": zIndex,
			"display": "none",
			"width": widthVal
		});

		var className = ("data-year-ice" + index);
		$(clone).addClass(className);
		$(CANVAS).append(clone);

	});



}