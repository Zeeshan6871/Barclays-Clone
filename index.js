let lastScrollTop = 0;
const nav = document.getElementById("main-nav");
const hiddenNav = document.getElementById("hiddenNav");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  

  
  
  // If the user scrolls down, hide the nav; if up, show it
  if (scrollTop > lastScrollTop) {
      // Scroll down
      nav.classList.remove("nav-visible");
      nav.classList.add("nav-hidden");
      hiddenNav.classList.remove("d-none");
      hiddenNav.classList.add("d-flex");
    } else {
        // Scroll up
        nav.classList.remove("nav-hidden");
        nav.classList.add("nav-visible");
        hiddenNav.classList.add("d-none");
        hiddenNav.classList.remove("d-flex");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative scroll values
});
