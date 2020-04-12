// $(document).ready(function(){
//     $("#flipToSignUp").click(function(){
//         $("#main").css("-webkit-animation-name","showSignUp"); 
//         $("#main").css("transform","translate(-50%,-50%) rotateY(180deg)");
        
//         $("#signUpForm").css("-webkit-animation-name","hideSignIn"); 
//         $("#signUpForm").css("transform","translate(-50%,-50%) rotateY(0deg)");
//     });
    
//     $("#flipToSignIn").click(function(){
//         $("#main").css("-webkit-animation-name","hideSignUp"); 
//         $("#main").css("transform","translate(-50%,-50%) rotateY(0deg)");
        
//         $("#signUpForm").css("-webkit-animation-name","showSignIn"); 
//         $("#signUpForm").css("transform","translate(-50%,-50%) rotateY(180deg)");
//     });
// });

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById("flipToSignUp").click(function () {
     document.getElementById("main").classList.add("-webkit-animation-name showSignUp");
     document.getElementById("main").classList.add("transform: translate(-50%,-50%) rotateY(180deg)");

     document.getElementById("signUpForm").classList.add("-webkit-animation-name hideSignIn");
     document.getElementById("signUpForm").classList.add("transform: translate(-50%,-50%) rotateY(0deg)");
  });

   document.getElementById("flipToSignIn").click(function () {
     document.getElementById("main").classList.add("-webkit-animation-name hideSignUp");
     document.getElementById("main").classList.add("transform: translate(-50%,-50%) rotateY(0deg)");

     document.getElementById("signUpForm").classList.add("-webkit-animation-name showSignIn");
     document.getElementById("signUpForm").classList.add("transform: translate(-50%,-50%) rotateY(180deg)");
   });
});