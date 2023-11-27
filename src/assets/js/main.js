import { menu } from "./menu.js";
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

window.addEventListener("load",function(){
    smooth();
    link();
    menu();
    port();//네가지 추가
})