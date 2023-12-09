document.addEventListener('DOMContentLoaded', () => {

function toggleActiveClass(event) {
  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function(item) {
    item.classList.remove('active');
  });

  event.currentTarget.classList.add('active');
}

var navItems = document.querySelectorAll('.nav-item');
navItems.forEach(function(item) {
  item.addEventListener('click', toggleActiveClass);
});


var logoSite = document.getElementById('sinepsyLogo');
if (logoSite) {
  logoSite.addEventListener('click', function(event) {
    var accueilNavItem = document.getElementById('accueilNavItem');
  var navItems = document.querySelectorAll('.nav-item');

    if (accueilNavItem) {
      navItems.forEach(function(item) {
        item.classList.remove('active');
      });
      accueilNavItem.classList.add('active');
    }
  });
}
});

