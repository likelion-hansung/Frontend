 const content = "본 사이트는 한성대학교 학생들의 공강시간 활용에 대한 커뮤니티 공간입니다."
 const text = document.querySelector(".typing")
 let index = 0;

 function typing() {
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent=""
        index=0;

    }
 }

 setInterval(typing, 100)

 const carousel = document.querySelector(".carousel");
 let isDragStart = false, prevPageX, prevScrollLeft;
 const dragging=(e)=> {
    if(!isDragStart) return;
    e.preventDefault();
    let poistionDiff = e.pageX - prevPageX
    carousel.scrollLeft= prevScrollLeft-poistionDiff;
    
 }

 const dragStop = () => {
    isDragStart=false;
 }
