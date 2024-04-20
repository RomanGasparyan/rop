document.querySelector(".burger-menu").addEventListener("click", function () {
  this.classList.toggle("active");

  document.querySelector(".nav-list").classList.toggle("nav-list--active");
});
