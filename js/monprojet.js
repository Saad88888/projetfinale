function lireplus(city) {
    var dots = document.querySelector(`.card[data-city="${city}"] .dots`);
    var moreText = document.querySelector(`.card[data-city="${city}"] .more`); 
    var btnText = document.querySelector(`.card[data-city="${city}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Lire plus";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Lire moins"; 
        moreText.style.display = "inline";
    }
}




var ham = document.querySelectorAll('.dimo')
for(var i = 0; i < ham.length; i++){
    ham[i].addEventListener('click', function () {


        
    window.location.href = "./services.html";
    
});

}





  window.onscroll = function() {myFunction()};

  var navbar =  document.querySelectorAll(".mouvement");
  
  var sticky = navbar.offsetTop;
  
 
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }