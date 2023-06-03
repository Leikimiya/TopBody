let add_btns = document.querySelectorAll("*[data-modal-add-btn]")

for (let i = 0; i < add_btns.length; i++) {
    add_btns[i].addEventListener('click', function () {
        let name = add_btns[i].getAttribute('data-modal-add-btn');
        let modal = document.querySelector("[data-modal-add-window='" + name + "']")
        modal.style.display = "block";
        let close = modal.querySelector(".modal_close-btn");
        close.addEventListener('click', function () {
            modal.style.display = "none";

        })
    })
}

window.onclick = function (event) {
    if (event.target.hasAttribute('data-modal-add-window')) {
      let modals = document.querySelectorAll('*[data-modal-add-window]');
      for (let i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
      }
    }
  }





