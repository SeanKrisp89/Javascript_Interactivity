function changeButtonColor(x){
    var button = document.getElementById("button"); //Grab the element that we want to alter via the document.getElementByID method and set it equal to a local variable
    button.style.background = x.value;              //Alter any style of the element by referencing the local variable.style.attribute = parameter.value
}

function changeTextColor(x){
    var text = document.getElementById("button");
    text.style.color = x.value;
}

function changeButtonHeight(x){
    var size = document.getElementById("button");
    size.style.height = x.value;
}

function changeButtonRadius(x){
    var radius = document.getElementById("button");
    radius.style.borderRadius = x.value;
}

function changeButtonBorder(x){
    var border = document.getElementById("button");
    border.style.borderColor = x.value;
}

function changeButtonWidth(x){
    var width = document.getElementById("button");
    width.style.width = x.value;
}