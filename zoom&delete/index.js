var greyBack = document.getElementById("greyBack"),
	defLeft = null,
	defRight = null,
	defTop = null,
	defBottom = null,
	defMargin = null,
	currentDiv = null,
    bin = document.getElementById("bin"),
    previousDiv = null;

function getID(element) {
	element = element || window.event;
	element = element.target || e.srcElement;
	
	if (element.className == "boxes") {
		zoomIn(element);
		currentDiv = element
	} else if (element.id == "greyBack") {
		zoomOut(currentDiv);
	} else if (element.id == "bin") {
        zoomOut(currentDiv);
        removeImage(currentDiv);
    }
}

function zoomIn(element) {
	defLeft = element.style.left,
	defRight = element.style.right,
	defTop = element.style.top,
	defBottom = element.style.bottom,
	defMargin = element.style.margin;
	
	element.style.position = "absolute"
	element.style.transform = "scale(5)"
	element.style.zIndex = "1"
	element.style.left = "0px"
	element.style.right = "0px"
	element.style.top = "0px"
	element.style.bottom = "0px"
	element.style.margin = "auto"
	
	greyBack.style.zIndex = "0"
	greyBack.style.opacity = "0.75"
    
    bin.style.display = "block"
}

function zoomOut(element) {
	element.style.position = "relative"
	element.style.transform = "scale(1)"
	element.style.zIndex = "0"
	element.style.left = defLeft
	element.style.right = defRight
	element.style.top = defTop
	element.style.bottom = defBottom
	element.style.margin = defMargin
	
	greyBack.style.zIndex = "-1"
	greyBack.style.opacity = "0"
    
    bin.style.display = "none"
}


function removeImage(e) {
    e.parentNode.removeChild(e);
}