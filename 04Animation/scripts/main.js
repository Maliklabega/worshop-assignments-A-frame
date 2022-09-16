
var rotationSpeed = 0.5;
var myOtherBox = document.getElementById('myOtherBox');

function spin() {
myOtherBox.object3D.rotation.x.y -= rotationSpeed;
console.log(myOtherBox.object3D.rotation.y);
 }

setInterval(spin,16); 