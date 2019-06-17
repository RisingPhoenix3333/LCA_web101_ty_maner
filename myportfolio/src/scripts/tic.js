var gameMarker = "x"
function changeMarkerToX(){
    console.log("The x button was clicked!");
 }
function changeMarkerToO(){
    console.log("The x button was clicked!");
 }
 var xturn=true;
 function placemarker(id){
    var thisSquare = document.getElementById(id);
    if (xturn){
        thisSquare.innerHTML = "X";
    }
    else{
        thisSquare.innerHTML = "O";
    }
    xturn = !xturn;
 }