
let modal = document.querySelector(".modal");
let openM = document.querySelector(".how_to");
let closeM = document.querySelector(".closeButton");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

openM.addEventListener("click", toggleModal);
closeM.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
