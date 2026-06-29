const btn = document.getElementById("btn");
const fade = document.getElementById("fade");

btn.addEventListener("click", function(e){

    e.preventDefault();

    fade.classList.add("active");

    setTimeout(function(){

        window.location.href = "projets.html";

    }, 800);

});