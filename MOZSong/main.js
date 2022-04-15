import {NavBar, BarraTarefa, BarraDireita} from './src/componets/NavBar/index.js';

const $root=document.querySelector("#app");

$root.insertAdjacentHTML('beforeend',BarraTarefa());
$root.insertAdjacentHTML("beforeend",BarraDireita());
$root.insertAdjacentHTML("beforeend",NavBar());


