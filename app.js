window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let threshold = 50; 
  
    if (window.pageYOffset >= threshold) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });




  

