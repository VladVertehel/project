let burger = document.querySelector('#toggle');
let nav = document.querySelector('nav');

burger.onclick = function () {
    if (nav.classList.contains('move')) {
        nav.classList.remove('move');
    } else {
        nav.classList.add('move');
    }
}
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
open.addEventListener("click", showModal);
function showModal() {
    modal.classList.add("show-modal");
}
close.addEventListener("click", hideModal);
function hideModal() {
    modal.classList.remove("show-modal");
}
