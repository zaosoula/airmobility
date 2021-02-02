document.addEventListener('DOMContentLoaded', function() {

  let form = document.querySelector('#contactform');

  setTimeout(function() {
    form.action = "mailto:alice.marty@ynov.com";
  },1000);
  
})