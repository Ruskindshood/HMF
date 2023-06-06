  function validation(){
    var nameV = document.getElementById('navn').value;
    var mailV = document.getElementById('email').value;
  
    var errormsgV = document.getElementById('error_message');
    var msgV =["Venligst skriv navn", "Venligst skriv email"];
  
  
    if(nameV.length <5 ){
        errormsgV.innerHTML = msgV[0];
        return false;
    }
  
    if(mailV.length <6 ){
        errormsgV.innerHTML = msgV[1];
        return false;
    }
    else{
     alert("Tak - din mail er blevet sendt. Tjek din mail for yderligere info");
    }
  }

  function more() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("morebtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Læs mere";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Læs mindre";
      moreText.style.display = "inline";
    }
  }
  
  function more1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("morebtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Læs mere";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Læs mindre";
      moreText.style.display = "inline";
    }
  }
  
  function more2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("morebtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Læs mere";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Læs mindre";
      moreText.style.display = "inline";
    }
  }
  
  function more3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("morebtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Læs mere";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Læs mindre";
      moreText.style.display = "inline";
    }
  }
  
  function more4() {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("morebtn4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Læs mere";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Læs mindre";
      moreText.style.display = "inline";
    }
  }