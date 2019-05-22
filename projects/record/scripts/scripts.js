$(document).ready(function() {

	// creates data objects from data.js
	var data = createObjects();

	var bodWidth = $("#body").width();
	var bodHeight = $("#body").height();

	if (bodWidth > bodHeight) {
		$("#body").removeClass("body-tall").addClass("body-wide");
		$("#sidebar").removeClass("sidebar-tall").addClass("sidebar-wide");
	} else {
		$("#body").removeClass("body-wide").addClass("body-tall");
		$("#sidebar").removeClass("sidebar-wide").addClass("sidebar-tall");
	}

	// creates arrow objects for increasing and decreasing the years
	var yearValue = 0;
	// stores whether or not the user has put in a scene allowing for incrementation or decrementation of yearValue
	var sceneInput = false;
	var globalTempRendered = false;
	var c02Rendered = false;

	var bgTemp = [];
	var carbonOpac = [];
	data.forEach(function(element) {
		bgTemp.push([145, 152, 229]);
		carbonOpac.push(0.0);
	});


	// collects all draggeable icons and adds the functionality for dragging
	// and repositioning to beginning position on mouseup
	$(".icon").each(function(index, value) {
		$(this).addClass("icon-hover");
		$(this).draggable({
			start: function(e, u) {
				$(this).removeClass("icon-hover");
			},
			stop: function(e, u) {
				$(this).addClass("icon-hover");
			},
			cursor: 'grabbing',
			revert: true
		});
	});


	// retrieves the globe element and attaches a droppable feature to it for when any of the draggeable icons above is dropped over it
	$("#data-window").droppable({
		accept: ".icon",
		drop: function(event, ui) {
			var thing = $(ui.draggable).get(0);

			$("#drop-indicator").remove();
			// deciphers which element has been dropped and runs the function for altering the data of that given element
			switch ($(thing).attr("id")) {
				case "sea-level-icon":
					console.log("sea");
					showSeaLevel(data);
					break;
				case "global-temp-icon":
					console.log("temp");
					bgTemp = showGlobalTemp(data);
					globalTempRendered = true;
					break;
				case "ice-sheets-icon":
					console.log("ice");
					showIceLevel(data);
					break;
				case "C02-levels-icon":
					console.log("C02");
					carbonOpac = showC02Levels(data);
					c02Rendered = true;
					break;
				case "globe":
					console.log("globe");
					break
				default:
					console.log("Error: icon not registered");
			}
			sceneInput = true;
		}
	});


	var timePosLeft = 0;
	$("#hourglass").draggable({
		containment: "#time-slider-line",
		axis: "x",
		cursor: 'ew-resize',
		drag: function(e, u) {
			timePosLeft = u.position.left;
		}
	});

	$("#hourglass").mousedown(function() {
		$(this).mousemove(function() {
			var sectionsLength = Math.floor($("#time-slider-line").width() / data.length);
			yearValue = Math.round(timePosLeft / sectionsLength);
		});
	});

	$("#hourglass").mouseup(function() {

		// removes and adds appropriate ice berg image
		var yearsIceClass = ".data-year-ice" + yearValue;
		$(".ice-bergs").each(function() {
			$(this).css("display", "none");
		});
		$(yearsIceClass).fadeIn();

		// remove and add waves
		var wavesClasses = [];
		var i = 0;
		while (i <= yearValue) {
			wavesClasses.push(".data-year-waves" + i);
			i++;
		}
		$(".waves").hide();
		wavesClasses.forEach(function(element) {
			$(element).fadeIn();
		});

		if (globalTempRendered) {
			var colorAtYear = bgTemp[yearValue];
			var rgbVal = "rgb(" + colorAtYear[0] + "," + colorAtYear[1] + "," + colorAtYear[2] + ")";
			$("#data-window").css("background-color", rgbVal);
		}

		if (c02Rendered) {
			var opacAtYear = carbonOpac[yearValue];
			$("#fog").css("opacity", opacAtYear);
			$("#fog").css("display", "inline-block");
		}
	});



});