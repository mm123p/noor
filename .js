var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function myFunction() {
  var x = document.getElementById("data");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function myfunction() {
  alert(" اهلا بكم بمستشفى النور التخصصى");
}
function ValidateEmail(inputText)
{
  const emailField = document.querySelector("#email");
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(emailField.value.match(mailformat))
  {
    alert("Valid email address!");
    emailField.focus();
    return true;
  }
  else
  {
    alert("يرجى التاكد من ادخال ايميل الصحيح");
    emailField.focus();
    return false;
    
  }
}