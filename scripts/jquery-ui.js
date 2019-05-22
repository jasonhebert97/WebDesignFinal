$(document).ready(function() {

	var abtDropped = false;
	var exerDropped = false;
	var procDropped = false;
	var projDropped = false;
	var rspDropped = false;

	$("#abt-sol").draggable({
		snap: "#abt-box",
		revert: function(event) {
			if (event != false) {
				abtDropped = true;
				return false;
			} else {
				return true;
			}
		},
		start: function() {
			$(".abt").css("opacity", "1");
		},
		stop: function() {
			if (!abtDropped) {
				$("#body").find("*").not(".inp  ").css("opacity", "0.25");
				$(".pipe-sol").css("opacity", "1");
			} else {
				$("#abt-box").css("opacity", "0.25");
				$(".abt-after").fadeTo("slow", 1.0);
				$("#abt").hover(function() {
					$(this).css({
						"transform": "scale(1.1)",
						"cursor": "pointer"
					});
				}, function() {
					$(this).css({
						"transform": "scale(1.0)",
						"cursor": "pointer"
					});
				});
				$("#abt").click(function() {
					$("*").fadeOut("slow");
					setTimeout(function() {
						window.location = "about/about.html";
					}, 1500);
				});
			}
		},
		cursor: "grabbing"
	});

	$("#abt-box").droppable({
		accept: "#abt-sol"
	});

	$("#exer-sol").draggable({
		snap: "#exer-box",
		revert: function(event) {
			if (event != false) {
				exerDropped = true;
				return false;
			} else {
				return true;
			}
		},
		cursor: "grabbing",
		start: function() {
			$(".exer").css("opacity", "1");
		},
		stop: function() {
			if (!exerDropped) {
				$("#body").find("*").not(".inp").css("opacity", "0.25");
				$(".pipe-sol").css("opacity", "1");
			} else {
				$("#exer-box").css("opacity", "0.25");
				$(".exer-after").fadeTo("slow", 1.0);
				$("#exer").hover(function() {
					$(this).css({
						"transform": "scale(1.1)",
						"cursor": "pointer"
					});
				}, function() {
					$(this).css({
						"transform": "scale(1.0)",
						"cursor": "pointer"
					});
				});
				$("#exer").click(function() {
					$("*").fadeOut("slow");
					setTimeout(function() {
						window.location = "exercises/exercises.html";
					}, 1500);
				});
			}
		}
	});

	$("#exer-box").droppable({
		accept: "#exer-sol"
	});

	$("#proc-sol").draggable({
		snap: "#proc-box",
		revert: function(event) {
			if (event != false) {
				procDropped = true;
				return false;
			} else {
				return true;
			}
		},
		start: function() {
			$(".proc").css("opacity", "1");
		},
		stop: function() {
			if (!procDropped) {
				$("#body").find("*").not(".inp").css("opacity", "0.25");
				$(".pipe-sol").css("opacity", "1");
			} else {
				$("#proc-box").css("opacity", "0.25");
				$(".proc-after").fadeTo("slow", 1.0);
				$("#proc").hover(function() {
					$(this).css({
						"transform": "scale(1.1)",
						"cursor": "pointer"
					});
				}, function() {
					$(this).css({
						"transform": "scale(1.0)",
						"cursor": "pointer"
					});
				});
				$("#proc").click(function() {
					$("*").fadeOut("slow");
					setTimeout(function() {
						window.location = "processes/processes.html";
					}, 1500);
				});
			}
		},
		cursor: "grabbing"
	});

	$("#proc-box").droppable({
		accept: "#proc-sol"
	});

	$("#proj-sol").draggable({
		snap: ".rsp-proj-input",
		revert: function(event) {
			if (event != false) {
				projDropped = true;
				return false;
			} else {
				return true;
			}
		},
		start: function() {
			$(".proj").css("opacity", "1");
		},
		stop: function() {
			if (!projDropped) {
				$("#body").find("*").not(".inp").css("opacity", "0.25");
				$(".pipe-sol").css("opacity", "1");
			} else {
				$("#proj-box").css("opacity", "0.25");
				$(".proj-after").fadeTo("slow", 1.0);
				$("#proj").hover(function() {
					$(this).css({
						"transform": "scale(1.1)",
						"cursor": "pointer"
					});
				}, function() {
					$(this).css({
						"transform": "scale(1.0)",
						"cursor": "pointer"
					});
				});
				$("#proj").click(function() {
					$("*").fadeOut("slow");
					setTimeout(function() {
						window.location = "projects/projects.html";
					}, 1500);
				});
			}
		},
		cursor: "grabbing"
	});

	$(".rsp-proj-input").droppable({
		accept: "#rsp-sol, #proj-sol"
	});

	$("#rsp-sol").draggable({
		snap: ".rsp-proj-input",
		revert: function(event) {
			if (event != false) {
				rspDropped = true;
				return false;
			} else {
				return true;
			}
		},
		start: function() {
			$(".rsp").css("opacity", "1");
		},
		stop: function() {
			if (!rspDropped) {
				$("#body").find("*").not(".inp").css("opacity", "0.25");
				$(".pipe-sol").css("opacity", "1");
			} else {
				$("#rsp-box").css("opacity", "0.25");
				$(".rsp-after").fadeTo("slow", 1.0);
				$("#rsp").hover(function() {
					$(this).css({
						"transform": "scale(1.1)",
						"cursor": "pointer"
					});
				}, function() {
					$(this).css({
						"transform": "scale(1.0)",
						"cursor": "pointer"
					});
				});
				$("#rsp").click(function() {
					$("*").fadeOut("slow");
					setTimeout(function() {
						window.location = "responses/responses.html";
					}, 1500);
				});
			}
		},
		cursor: "grabbing"
	});

});