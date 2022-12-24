const openBtn = document.querySelector(".menu-icon");
const menuItem = document.querySelector(".menu-items");
const hiddenMenu = document.querySelector(".hidden-items");
const menuItems = document.querySelectorAll('.menu-item');

openBtn.addEventListener("click", () => {
  hiddenMenu.classList.toggle("active");
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    hiddenMenu.classList.remove("active");
  }
});

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click',()=>{
    menuItems.forEach(menuItem => {
      if(menuItem.classList.contains('active-item')){
        menuItem.classList.remove('active-item');
      }
    })
    menuItem.classList.add('active-item');
  })
})