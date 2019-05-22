var widthGrHeight = true;

$(document).ready(function() {

	var width = $("#body").width();
	var height = $("#body").height();

	var cubeDim = 0;
	var templateCol = "";
	var templateRow = "";

	// determine the appropriate grid layout depending on the
	// orientation of the current screen
	if (width > height) {
		cubeDim = height / 10;
		templateCol = "auto repeat(10," + cubeDim + "px) auto";
		templateRow = "repeat(10," + cubeDim + "px)";
	} else {
		cubeDim = width / 10;
		templateRow = "auto repeat(10," + cubeDim + "px) auto";
		templateCol = "repeat(10," + cubeDim + "px)";
	}

	// place the correct number of rows and columns to the
	// grid display of the body granted the viewport width and height
	$("#body").css({
		"grid-template-columns": templateCol,
		"grid-template-rows": templateRow
	});

	// format the grid of the page to fit that of the screen size
	// rotate all pipes appropriately
	if (width > height) {
		$("#body").removeClass("tall").addClass("wide");
		$("#body").css("grid-gap", "3px");
		$(".drop-area").removeClass("tall-drop-area").addClass("wide-drop-area");
		$("p").css("transform", "translate(-50%, -50%) rotate(0deg)");
		$("p").css("font-size", "2rem");
		widthGrHeight = true;
	} else {
		$("#body").removeClass("wide").addClass("tall");
		$("#body").css("grid-gap", "1px");
		$(".drop-area").removeClass("wide-drop-area").addClass("tall-drop-area");
		$("p").css("transform", "translate(-50%, -50%) rotate(90deg)");
		$("p").css("font-size", "1rem");
		widthGrHeight = false;
	}

	$(".pipe").each(function() {
		var styleStr = $(this).attr("style");
		if (styleStr.includes("rotate")) {
			var styleStrSplit = styleStr.split(" ");
			var rotateStr = styleStrSplit[3];
			var rotateStrNoRot = rotateStr.replace("rotate(", "");
			var rotateStrStripped = rotateStrNoRot.replace("deg);", "");
			var rotateInt = parseInt(rotateStrStripped);

			if (!widthGrHeight) {
				var strTemplate = styleStrSplit[0] + styleStrSplit[1] + styleStrSplit[2];
				var rotateStr = "rotate(" + (rotateInt + 90) + "deg);";
				var newStyle = strTemplate + rotateStr;
				$(this).attr("style", newStyle);
			}
		}
	});

	$("#body").find("*").not(".inp, .pipe-sol, #landing").css("opacity", "0.25");

	setTimeout(function() {
		$("#landing").fadeOut(1500);
	}, 1000);

});