let button = document.getElementById("button");
let ageInput = document.getElementById("age");

button.onclick = function() {
    if(ageInput.value >= 18) {
        alert("شما می توانید وارد شوید");
    } if(ageInput.value < 18) {
        alert("شما نمی توانید وارد شوید");
    }
}