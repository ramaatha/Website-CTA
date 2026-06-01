function toggleNav() {
  document.getElementById('navLinks').classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(e) {
    var navbar = document.querySelector('.navbar');
    var navMenu = document.getElementById('navLinks');
    if (navbar && navMenu && !navbar.contains(e.target) && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});
