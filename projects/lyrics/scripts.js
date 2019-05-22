$(document).ready(function() {



	if ($(window).width() < 1025) {
		$("#body").children().hide();
		$("#body").css({
			"display": "block"
		});

		var p = document.createElement("p");
		var txt = document.createTextNode("site not optimized for mobile");
		p.appendChild(txt);
		$(p).css({
			"position": "relative",
			"display": "inline-block",
			"top": "50%",
			"left": "50%",
			"transform": "translate(-50%, -50%)",
			"padding": "25%",
			"color": "white",
			"font-size": "5rem",
			"text-align": "center"
		});
		$("#body").append(p);
	}


	var v2width = $("#verse2").width();
	var v2height = $("#verse2").height();

	$("#v2-frame").css({
		"width": (v2width + "px"),
		"height": (v2height + "px")
	});

	$("#v4-frame").css({
		"width": (v2width + "px"),
		"height": (v2height + "px")
	});

	var bbContentWrapWidth = $("#bb-content-wrapper").width() + "px";
	var bbContentWrapHeight = $("#bb-content-wrapper").height() + "px";

	$("#bb-content-wrapper").css("grid-template-rows", (bbContentWrapHeight + " " + bbContentWrapHeight));

	$(".v1").css({
		"width": "100%",
		"height": v2height + "px"
	});

	$(".v3").css({
		"width": "100%",
		"height": v2height + "px"
	});





});