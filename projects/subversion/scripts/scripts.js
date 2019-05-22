// Waits until entire window is loaded to run script
window.onload = function() {

	var dateContent = document.getElementById('date-content');

	var d = new Date();

	var date = (d.getMonth() + 1) + "/" + (d.getDate()) + "/" + d.getFullYear();

	dateContent.innerHTML = date;

	// body variable containing only the body element
	var body = document.getElementsByTagName('body')[0];

	// clickbait images stored as variables for code accessibility
	var acquireFrog = document.getElementById('acquire-frog');
	var amphibiousPitcher = document.getElementById('amphibious-pitcher');
	var crabKnife = document.getElementById('crab-knife');
	var cursedBoobah = document.getElementById('cursed-boobah');
	var goodThings = document.getElementById('good-things');
	var jazzyLaddy = document.getElementById('jazzy-laddy');

	// an array storing the clickbait elements to be used when randomly choosing them
	var clickbaitArray = [acquireFrog, amphibiousPitcher, crabKnife, cursedBoobah, goodThings, jazzyLaddy];

	for (var i = 0; i < clickbaitArray.length; i++) {
		clickbaitArray[i].style.left = "300px";
		clickbaitArray[i].style.top = "300px";
		clickbaitArray[i].style.height = "320px";
		clickbaitArray[i].style.width = "512px";
		clickbaitArray[i].setAttribute("draggable", "false");
	}

	// currently displayed clickbait element
	var currentlyShownClickbait = amphibiousPitcher;

	var pageWidth, pageHeight;
	var imgHeight, imgWidth;
	var xPosMouse, yPosMouse;

	pageHeight = window.innerHeight;
	pageWidth = window.innerWidth;

	imgHeight = parseInt(currentlyShownClickbait.style.height.replace("px", ""));
	imgWidth = parseInt(currentlyShownClickbait.style.width.replace("px", ""));

	var imgX, imgY;

	var moving = false;
	var alreadyHovered = false;
	var inCorner = false;

	function moveImgXY(e) {

		body.style.cursor = 'url("../img/fishing-fly-small.png") 5 62, grab';

		xPosMouse = event.clientX;
		yPosMouse = event.clientY;

		pageWidth = window.innerWidth;
		pageHeight = window.innerHeight;

		imgHeight = parseInt(currentlyShownClickbait.style.height.replace("px", ""));
		imgWidth = parseInt(currentlyShownClickbait.style.width.replace("px", ""));


		imgX = parseInt(currentlyShownClickbait.style.left.replace("px", ""));
		imgY = parseInt(currentlyShownClickbait.style.top.replace("px", ""));

		var rightSideOfImg = imgX + imgWidth;
		var bottomSideOfImg = imgY + imgHeight;

		var xyMoveArray = moveImg();

		// if in the upper left corner
		if (imgX <= 0 && imgY <= 0) {
			hittingCorner();
			currentlyShownClickbait.style.left = "0px";
			currentlyShownClickbait.style.top = "0px";


			// if hitting the left wall
		} else if (imgX <= 0) {

			// if hitting the bottom left corner
			if (bottomSideOfImg >= pageHeight) {
				var newDim = hittingCorner();
				currentlyShownClickbait.style.left = "0px";
				currentlyShownClickbait.style.top = (pageHeight - newDim[0]) + "px";

				// if only hitting the left wall
			} else {

				currentlyShownClickbait.style.left = "0px";
				imgY += xyMoveArray[1];
				currentlyShownClickbait.style.top = imgY + "px";
				inCorner = false;
			}

			// if hitting the top wall
		} else if (imgY <= 0) {


			// if image in upper right corner
			if (rightSideOfImg >= pageWidth) {
				var newDim = hittingCorner();
				currentlyShownClickbait.style.top = "0px";
				currentlyShownClickbait.style.left = (pageWidth - newDim[1]) + "px";

				// if only hitting the top wall
			} else {
				currentlyShownClickbait.style.top = "0px";
				imgX += xyMoveArray[0];
				currentlyShownClickbait.style.left = imgX + "px";
				inCorner = false;
			}

			// if hitting bottom right corner
		} else if (rightSideOfImg >= pageWidth && bottomSideOfImg >= pageHeight) {

			hittingCorner();
			currentlyShownClickbait.style.top = (pageHeight - imgHeight) + "px";
			currentlyShownClickbait.style.left = (pageWidth - imgWidth) + "px";



			// if hitting the right wall
		} else if (rightSideOfImg >= pageWidth) {

			imgY += xyMoveArray[1];
			currentlyShownClickbait.style.top = imgY + "px";
			inCorner = false;

			// if hitting the bottom wall
		} else if (bottomSideOfImg >= pageHeight) {

			currentlyShownClickbait.style.top = (pageHeight - imgHeight) + "px";
			imgX += xyMoveArray[0];
			currentlyShownClickbait.style.left = imgX + "px";
			inCorner = false;

		} else {
			imgX += xyMoveArray[0];
			imgY += xyMoveArray[1];

			currentlyShownClickbait.style.left = imgX + "px";
			currentlyShownClickbait.style.top = imgY + "px";
			inCorner = false;
		}

		body.style.cursor = 'url("../img/fishing-fly-small.png") 5 62, grab';

	}

	function hittingCorner() {

		var newDimensions;

		if (!(imgWidth < 200)) {
			imgHeight = imgHeight * 0.97;
			imgWidth = imgWidth * 0.97;
			currentlyShownClickbait.style.height = imgHeight + "px";
			currentlyShownClickbait.style.width = imgWidth + "px";
		} else {
			inCorner = true;
		}

		newDimensions = [imgHeight, imgWidth];
		return newDimensions;
	}

	// determine the way in which the image should move according
	// to the position of the mouse
	function moveImg() {
		var xyMoveArray = [0, 0];

		if (moving) {
			if (imgX > xPosMouse && imgY > yPosMouse) {
				xyMoveArray[0] = 25;
				xyMoveArray[1] = 25;
			} else if (imgX < xPosMouse && imgY > yPosMouse) {
				xyMoveArray[0] = -25;
				xyMoveArray[1] = 25;
			} else if (imgX > xPosMouse && imgY < yPosMouse) {
				xyMoveArray[0] = 25;
				xyMoveArray[1] = -25;
			} else if (imgX < xPosMouse && imgY < yPosMouse) {
				xyMoveArray[0] = -25;
				xyMoveArray[1] = -25;
			}
		}
		return xyMoveArray;
	}

	function beginMoving() {
		moving = true;
		if (!alreadyHovered) {
			var randomX = Math.floor((Math.random() * (pageWidth - imgWidth - 500)) + xPosMouse);
			var randomY = Math.floor((Math.random() * (pageHeight - imgHeight - 300)) + yPosMouse);

			currentlyShownClickbait.style.left = randomX + "px";
			currentlyShownClickbait.style.top = randomY + "px";
			alreadyHovered = true;
		}
	}

	// currentlyShownClickbait.addEventListener("click", showRandomImg, false);
	function addEventToCurrentImage() {
		moving = false;
		alreadyHovered = false;
		inCorner = false;
		currentlyShownClickbait.addEventListener("mouseover", beginMoving, false);
		currentlyShownClickbait.addEventListener("click", showRandomImg, false);
	}


	// decides upon a random clickbait image to display
	function showRandomImg(e) {
		e.preventDefault();

		if (inCorner) {
			var indexChosen = Math.floor((Math.random() * clickbaitArray.length));
			var chosenElement = clickbaitArray[indexChosen];

			currentlyShownClickbait.classList.add("hidden");

			var randomX = Math.floor((Math.random() * (pageWidth - imgWidth - 500)) + 100);
			var randomY = Math.floor((Math.random() * (pageHeight - imgHeight - 300)) + 100);

			chosenElement.style.left = randomX + "px";
			chosenElement.style.top = randomY + "px";

			chosenElement.style.height = "320px";
			chosenElement.style.width = "512px";

			chosenElement.classList.remove("hidden");
			void chosenElement.offsetWidth;

			currentlyShownClickbait = chosenElement;

			addEventToCurrentImage();
		} else {

			var randomX = Math.floor((Math.random() * (pageWidth - imgWidth - 500)) + 100);
			var randomY = Math.floor((Math.random() * (pageHeight - imgHeight - 300)) + 100);

			currentlyShownClickbait.style.left = randomX + "px";
			currentlyShownClickbait.style.top = randomY + "px";
		}

		body.style.cursor = 'url("../img/fishing-fly-small.png") 5 62, grab';

	}

	// event listeners for all of the elements
	document.addEventListener("mousemove", moveImgXY, false);
	addEventToCurrentImage();

};