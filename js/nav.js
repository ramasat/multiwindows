// xfinity remote
var BTN_LEFT = 37, BTN_UP = 38, BTN_RIGHT = 39, BTN_DOWN = 40, BTN_OK = 13;

var currentFocus = 0;
var prevFocus = 0;
var buttonList = [];

function handleKeydown(e) {
    currentFocus = currentFocus || 0;
   
    switch (e.keyCode) {
        case BTN_OK:
            buttonList[currentFocus].click();
            break;

        case BTN_LEFT:
            prevFocus = currentFocus;
            if(currentFocus > 0)
                currentFocus -= 1;
            else
                currentFocus = buttonList.length - 1;
            buttonList[prevFocus].style.background = '#00A2E8';
            buttonList[currentFocus].style.background = '#FF7F27';
            buttonList[currentFocus].focus();
            break;

        case BTN_RIGHT:
            prevFocus = currentFocus;
            currentFocus += 1;
            if(currentFocus == buttonList.length)
                currentFocus = 0;
            buttonList[prevFocus].style.background = '#00A2E8';
            buttonList[currentFocus].style.background = '#FF7F27';
            buttonList[currentFocus].focus();
            break;
    }

    console.log("Handle Key Down: " + e.keyCode + " : " + currentFocus + "/" + buttonList.length + " : " + buttonList[currentFocus].id);
}

window.onload = function() {
    var arrayLength = 0;
    currentFocus = 0;
    buttonList = document.getElementsByTagName("button");
    arrayLength = buttonList.length;
    for (var i = 0; i < arrayLength; i++) {
        buttonList[i].style.background = '#00A2E8';
    }
    buttonList[currentFocus].style.background = '#FF7F27';
    buttonList[currentFocus].focus();

    // Add keydown handler
    window.addEventListener('keydown', handleKeydown, false);
}
