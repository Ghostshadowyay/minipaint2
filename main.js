var mouseEvent = "empty";
var lastPosition_x, lastPosition_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "blue";
var width = 1;
//
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    currentPosition_x= e.clientX- canvas.offSetLeft;
    currentPosition_y= e.clientY- canvas.offSetTop;
    if(mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width;

        console.log("last position:");
        console.log("x = " + lastPosition_x + ", y = " + lastPosition_y);
        ctx.moveTo(lastPosition_x, lastPosition_y);

        console.log("current position:");
        console.log("x = " + currentPosition_x + ", y = " + currentPosition_y);
        ctx.lineTo(currentPosition_x, currentPosition_y);
        ctx.stroke();
    }
    lastPosition_x = currentPosition_x;
    lastPosition_y = currentPosition_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

