const $popUp = document.querySelector('#popUp');
$popUp.children[1].addEventListener( "click" , dot );
function dot() {
    $popUp.style.display = "none"
}

const $footer = document.querySelector('footer');
$footer.addEventListener( "click" , boi );
function boi() {
    $popUp.style.display = "block"
}


//추가(서브메뉴1-2 클릭하면 배경 빨간색)
const $subMenu12 = document.querySelector("nav li:first-child a:last-child");
function red() {
    $subMenu12.style.background = 'red' ;
}