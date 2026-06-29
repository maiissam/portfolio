const bouton = document.getElementById("commencer");
const fade = document.getElementById("fade");

bouton.addEventListener("click", function(e){

    e.preventDefault();

    fade.classList.add("active");

    setTimeout(function(){

        window.location.href = bouton.href;

    }, 800);

});