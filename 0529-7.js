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



const $subMenu12 = document.querySelector("nav li:first-child a:last-child");
function red() {
    $subMenu12.style.background = 'red' ;
}



//추가(서브메뉴2-4 클릭하면 배경 파란색)

const $subMenu24 = document.querySelector('#blue');
$subMenu24.addEventListener( "click" , blue );
function blue() {
    $subMenu24.style.background = 'blue';
}

