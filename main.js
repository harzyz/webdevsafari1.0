let caret = document.getElementById('arrow')
let caret1 = document.getElementById('arrow1')
let foo = document.getElementById('blogList')
let sidenav = document.getElementById('navShow')
let image = './images/Vector (9).png'
let toggle = false
let beans = false

function toggleCaret(button){
  toggle = !toggle
  if(toggle){
    foo.style.display = 'block'
    button.style.transform = "rotate(180deg)"
  }else{
    foo.style.display = 'none'
    button.style.transform = "rotate(0deg)"
  }
}

let subMenu = document.getElementById('navShow')

function toggleSubMenu() {
  subMenu.classList.toggle('open');
}

// document.addEventListener('click', function (event) {
//   // Check if the clicked element is inside the submenu
//   var isClickInsideSubMenu = subMenu.contains(event.target);

//   // If the clicked element is outside the submenu, close the submenu
//   if (!isClickInsideSubMenu) {
//     subMenu.classList.remove('open');
//   }
// });
