import {
    NavBar,
    BarraTarefa,
    BarraDireita
} from './src/componets/NavBar/index.js';

const $root = document.querySelector("#app");

$root.insertAdjacentHTML('beforeend', BarraTarefa());
$root.insertAdjacentHTML("beforeend", BarraDireita());
$root.insertAdjacentHTML("beforeend", NavBar());


var btn = document.querySelector(".btn-Menu");
var menu_item = document.querySelector('.side__bar');
var search = document.querySelector("#search");


btn.addEventListener("click", () => {

    menu_item.classList.toggle("show");
    if (menu_item.classList.contains("show")) {
        search.classList.remove("show");
    }
});

var searchIcon = document.querySelector("#icon_label");
searchIcon.addEventListener("click", () => {

    search.classList.toggle("show");
    if (search.classList.contains("show")) {

        menu_item.classList.remove("show");
    }


});