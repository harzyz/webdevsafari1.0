let caret = document.getElementById('arrow')
let caret1 = document.getElementById('arrow1')
let sidenav = document.getElementById('navShow')
let image = './images/Vector (9).png'
let toggle = false
let beans = false

let foo = document.getElementById('blogList')
function toggleCaret(){
  foo.classList.toggle('show')
  toggle = !toggle
  let button = document.getElementById('arrow1');
  if(toggle){
    button.style.transform = "rotate(180deg)"
  }else{
    button.style.transform = "rotate(0deg)"
  }
}
let boo = document.getElementById('courseList')
function toggleCaret2(){
  boo.classList.toggle('show')
  toggle = !toggle
  let button = document.getElementById('arrow');
  if(toggle){
    button.style.transform = "rotate(180deg)"
  }else{
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
