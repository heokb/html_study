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



const $subMenu24 = document.querySelector('#blue');
$subMenu24.addEventListener( "click" , blue );
function blue() {
    $subMenu24.style.background = 'blue';
}


//미션 서브메뉴4-1 클릭하면 글자색 빨간색+밑줄 없애기 (onclick)

const $subMenu41 = document.querySelector('#bblue')
function bblue() {
    $subMenu41.style.color = 'red' ;
    $subMenu41.style.textDecoration = 'none';
}


//미션 공지사항 영역을 클릭하면 공지사항 바탕색이 변경된다. (listener)

const $Menu = document.querySelector('#popUp')
$Menu.addEventListener( "click" , tomato )
function tomato() {
    $Menu.style.background = 'tomato' ;
}