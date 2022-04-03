const ham = document.getElementById('hamburgerBtn');
const priNav = document.getElementById('primaryNav');

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
  priNav.classList.toggle('responsive');
}

ham.onclick = toggleMenu;