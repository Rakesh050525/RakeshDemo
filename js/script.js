// Small UI behaviors for demo static site
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  toggle && toggle.addEventListener('click', function(){
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  var form = document.getElementById('contactForm');
  var thanks = document.getElementById('thanks');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var data = new FormData(form);
      console.log('Contact form data:');
      for(var pair of data.entries()) console.log(pair[0]+':', pair[1]);
      form.reset();
      form.hidden = true;
      thanks.hidden = false;
    });
  }
});
