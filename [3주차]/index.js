
function button1(){
    if(confirm("예매 사이트 창으로 이동하시겠습니까?")==true){
        window.location.href="https://mticket.lotteworld.com/web/pdt/productList.do?ei_gsber=1210&amp;ei_bukrs=1200"
    }
    else{
        window.alert("원래 창으로 돌아갑니다.");
    }
}

function button2(){
    if(confirm("예매 사이트 창으로 이동하시겠습니까?")==true){
        window.location.href="https://smartstore.naver.com/theyacht/products/4712885498?NaPm=ct%3Dlgecq3mg%7Cci%3D0ye0001RfhryUFaiBL3z%7Ctr%3Dpla%7Chk%3Ddb0b48f36b50c98f585f2f60183677bd047f1a50"
    }
    else{
        window.alert("원래 창으로 돌아갑니다.");
    }
}

function button3(){
    if(confirm("예매 사이트 창으로 이동하시겠습니까?")==true){
        window.location.href="http://www.royalpalace.go.kr/content/guide/guide01_tab01.asp"
    }
    else{
        window.alert("원래 창으로 돌아갑니다.");
    }
}

function button4(){
    if(confirm("예매 사이트 창으로 이동하시겠습니까?")==true){
        window.location.href="https://smartstore.naver.com/koreaparagliding/products/4826268126?NaPm=ct%3Dlgecsabs%7Cci%3D0A00003rfhryC8GxfeZF%7Ctr%3Dpla%7Chk%3D4bb034c43c0f0539b273b88dbb13ee6154c21cf4"
    }
    else{
        window.alert("원래 창으로 돌아갑니다.");
    }
}

function Clock() {
    var date = new Date();
    var YYYY = String(date.getFullYear());
    var MM = String(date.getMonth() + 1);
    var DD = Zero(date.getDate());
    var hh = Zero(date.getHours());
    var mm = Zero(date.getMinutes());
    var ss = Zero(date.getSeconds());
    var Week = Weekday();

    Write(YYYY, MM, DD, hh, mm, ss, Week);

    function Zero(num) {
        return (num < 10 ? '0' + num : '' + num);
    }

    function Weekday() {
        var Week = ['일', '월', '화', '수', '목', '금', '토'];
        var Weekday = date.getDay();
        return Week[Weekday];
    }

    function Write(YYYY, MM, DD, hh, mm, ss, Week) {
        var Clockday = document.getElementById("Clockday");
        var Clock = document.getElementById("Clock");
        Clockday.innerText = YYYY + '/' + MM + '/' + DD + '(' + Week + ')';
        Clock.innerText = hh + ':' + mm + ':' + ss;
    }
}

setInterval(Clock, 1000); 
