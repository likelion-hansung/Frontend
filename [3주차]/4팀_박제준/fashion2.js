var slogan = document.getElementById('hd-title');
slogan.innerText = "Give Me The Money";
slogan.style.fontSize = "40px";

var x = document.querySelectorAll('.nav-button > li')[2];
var myfunc = function() {
    alert('추가하신 상품이 없습니다.');
};
x.addEventListener("click", myfunc);

var orginalImg1 = 'IMG_0967.JPG';
var newImg1 = 'IMG_1160.jpeg'; 
var orginalImg2 = 'IMG_0950.JPG';
var newImg2 = 'IMG_0420.jpeg';
var orginalImg3 = 'IMG_0943.JPG';
var newImg3 = 'IMG_1154.jpeg';

var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var img3 = document.querySelector('#img3');

function showNewImg1() {
    img1.src = newImg1;
}
function showOriginalImg1() {
    img1.src = orginalImg1;
}
function showNewImg2() {
    img2.src = newImg2;
}
function showOriginalImg2() {
    img2.src = orginalImg2;
}
function showNewImg3() {
    img3.src = newImg3;
}
function showOrginalImg3() {
    img3.src = orginalImg3;
}

img1.addEventListener('mouseover', showNewImg1);
img1.addEventListener('mouseout', showOriginalImg1);
img2.addEventListener('mouseover', showNewImg2);
img2.addEventListener('mouseout', showOriginalImg2);
img3.addEventListener('mouseover', showNewImg3);
img3.addEventListener('mouseout', showOrginalImg3);