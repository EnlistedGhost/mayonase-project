var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "@bluestar";
  var lengthOtp = 9;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    captcha.push(charsArray[i]); //get the next character from the array
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 125;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 15, 40);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

// Smooth fade-in logic
$(document).ready(function() {
    // Fade in form after loading logic (fixes hiccup in view)
    setTimeout(function() {
      $(".login-box").animate({
          'opacity': '1'
      }, 700);
    }, 900);
});

$(function() {
  "use strict"

  var t = 500;
  createCaptcha();

  function init() {
    $("input[type='submit']").on("click", function() {
      event.preventDefault();
      debugger
      if (document.getElementById("cpatchaTextBox").value == code) {
        $(".login-box").animate({
        'opacity': '0'
      }, t);
      setTimeout(function() {
        $(".login-box").fadeOut(300, function() {
          $(this).remove();
        });
      }, 1000);
      setTimeout(function() {
        window.location.replace("khjgKJHg8912864GFxdfwe2.html");
      }, 2000);
      }else{
        alert("Your words fall upon deaf ears");
          createCaptcha();
      };
    });

  };
  init();
});