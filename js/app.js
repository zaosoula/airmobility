document.addEventListener('DOMContentLoaded', function() {
  // smoothscroll.polyfill();
  let form = document.querySelector('#contactform');

  setTimeout(function() {
    form.action = "mailto:alice.marty@ynov.com";
  },1000);

  let navLinks = document.querySelectorAll('nav a')

  navLinks.forEach(function(link){
    link.addEventListener('click', function(e){
      e.preventDefault();

      navLinks.forEach(function(_link) {
        _link.classList.remove('active');
      })
      
      link.classList.add('active');
      let target = document.querySelector(link.attributes.getNamedItem('data-target').value);

      target.scrollIntoView({ behavior: 'smooth' });

    })
  })
})