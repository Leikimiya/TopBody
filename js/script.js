function Logout() {
    document.getElementById('logout').classList.toggle('show');
};



// window.onclick = function (event) {
//     if (document.getElementById('logout').classList.contains('show')) {
//         document.getElementById('logout').classList.remove('show')
//     }
// }



// document.onclick = function (event){
//     var block = document.getElementById('logout');
//     if (event.target.className !== 'logout' &&  block.style.display !== 'none' ){
//         block.style.display = 'none';
//     }
//   };

// let  logouthidden = document.getElementById("logout")
// let ckicked = document.body
// document.addEventListener('click', (e) => {
//     if(e.target === ckicked) {
//         logouthidden.classList.remove("show");
//     }
// });


window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.UserButton') && !target.closest('.logout')) {
      document.getElementById('logout').classList.remove('show')
    }
  })
