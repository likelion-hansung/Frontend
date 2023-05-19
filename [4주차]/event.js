$("#question").hide();
$("#result").hide();

var num = 1;

var q = {
    1:{"title":"약속이 취소되었다면?", "type":"EI","A":"아악 약속 취소되었네ㅜ만날 사람 없나? 연락해봐야지","B":"아쉽긴한데..좋은데?? 나 안 나가도 되잖아? 아싸"},
    2:{"title":"약속을 잡을 때,", "type":"EI","A":"일주일에 최소 3~4일 일주일 내내도 가능","B":"일일주일에 0~2일 일단 연달아서 약속 안 잡음"},
    3:{"title":"영화를 보고 난 후,", "type":"SN","A":"재밌는 영화였다. 배고프니까 밥이나 먹으로 가야겠다","B":"여운이 가시질 않는다. 포털사이트에 영화해석을 검색해본다. 다른 사람들의 의견들이 궁금하다"},
    4:{"title":"어떤 결정을 내렸을 때 나는?", "type":"SN","A":"한번 내린 결정은 다시 생각하지 않는다","B":"내가 내린 결정이 맞는지 계속 생각하며 고민한다"},
    5:{"title":"상대방이 울고 있다면?", "type":"TF","A":"왜 울지..? 말 걸면 안되겠다. 일단 내버려 둔다","B":"다른 사람이 울고 있는 모습을 보면 자신도 울고 싶어질 때가 많다"},
    6:{"title":"친구가 다쳤을 때?", "type":"TF","A":"어쩌다가 다친거야 병원 다녀왔어? 약은?","B":"무슨 일이야?괜찮아?많이 아파?"},
    7:{"title":"여행가기 전", "type":"PJ","A":"대략적인 코스만 짜기 또는 무계획으로 아무데나 가도 상관없다.","B":"시간대별로 꼼꼼하게 여행계획을 짜놔야 맘이 편하다"},
    8:{"title":"친구가 영화를 보자고 한다. 이때 나는?", "type":"PJ","A":"온라인으로 하는거 귀찮다. 현장예매하면 된다. 매진되면 뭐 어때 다른데 돌아다녀도 상관없다.","B":"무조건 온라인으로 선예매를 하고 가야한다. 당일에 매진될 수 있는 사항까지 고려한다."},
    9:{"title":"친구들과 노는 중 시간은 벌써 저녁 10시다!","type":"EI","A":"오늘 밤을 불태워야함. 아무도 집에 못감","B":"이제 슬슬 집에 가고 싶어서 눈치보는 중"},
    10:{"title":"횡단보도를 건너고 있을 때 나는?", "type":"SN","A":"별 생각 없이 건넌다","B":"여기서 사고가 났다면? 난 어떻게 할까 상상한다"},
    11:{"title":"친구가 내 카톡을 읽씹한다면?", "type":"TF","A":"바쁜가 보다하고 별로 신경 안씀","B":"내가 뭔가 실수를 한 건지 대화내용을 다시 읽어봄"},
    12:{"title":"외출 준비를 할 때 나는?", "type":"PJ","A":"내키는 대로 준비 시작해서 아슬아슬하게 도착한다.","B":"준비하는데 걸리는 시간을 고려해서 준비시간을 미리 정한다. 항상 여유롭게 도착"},
}

function start() {
    $("#start").hide();
    $("#question").show();
    next();
}
var result = {
    "ESTP":{"mbti":"<img src='photo/estp.png' alt = 'ESTP'>","major":"기업/경제분석트랙, 경제금융투자트랙, 회계/재무경영트랙"},
    "ESTJ":{"mbti":"<img src='photo/estj.png' alt = 'ESTJ'>", "major":"공공행정트랙, 법/정책트랙, 기업경영트랙"},
    "ESFP":{"mbti":"<img src='photo/esfp.png' alt = 'ESTP'>","major":"문학문화콘텐츠학과, 인테리어디자인 트랙, 패션디자인 트랙 "},
    "ESFJ":{"mbti":"<img src='photo/esfj.png' alt = 'ESFJ'>","major":" 한국어교육트랙, 영미문학문화트랙, 영미언어정보트랙"},
    "ENTP":{"mbti":"<img src='photo/entp.png' alt = 'ENTP'>","major":"부동산자산관리트랙, 기업경영트랙, 벤처경영트랙    "},
    "ENTJ":{"mbti":"<img src='photo/entj.png' alt = 'ENTJ'>","major":" 글로벌비즈니스트랙, 기업/경제분석트랙, 기업경영트랙,벤처경영트랙, 회계/재무경영트랙"},
    "ENFP":{"mbti":"<img src='photo/enfp.png' alt = 'ENFP'>","major":" 문학문화콘텐츠학과, ICT디자인학부 모든 트랙, 글로벌패션산업학부 모든 트랙, 예술학부    "},
    "ENFJ":{"mbti":"<img src='photo/enfj.png' alt = 'ENFJ'>","major":" 기업경영트랙, 벤처경영트랙, 스마트도시/교통계획트랙, 국제무역트랙, 글로벌비즈니스트랙, 기업/경제분석트랙    "},
    "ISTP":{"mbti":"<img src='photo/istp.png' alt = 'ISTP'>","major":" 시스템반도체트랙, 기계설계트랙, 기계자동화트랙, 전자트랙, 빅데이터트랙, 모바일소프트웨어트랙, 경제금융투자트랙    "},
    "ISTJ":{"mbti":"<img src='photo/istj.png' alt = 'ISTJ'>","major":" 웹 공학트랙, 디지털콘텐츠/가상현실트랙, 모바일소프트웨어트랙, 법.정책트랙, 회계/재무경영트랙, 공공행정트랙    "},
    "ISFP":{"mbti":"<img src='photo/isfp.png' alt = 'ISFP'>","major":"  글로벌패션산업학부, ICT디자인학부, 뷰티디자인매니지먼트학과    "},
    "ISFJ":{"mbti":"<img src='photo/isfj.png' alt = 'ISFJ'>","major":" 도서관정보문화트랙, 디지털인문정보학트랙, 한국어교육트랙, 영미문학문화트랙, 영미언어정보트랙    "},
    "INFP":{"mbti":"<img src='photo/infp.png' alt = 'INFP'>","major":" 영상/애니메이션디자인트랙, 글로벌패션산업학부, 문학문화콘텐츠학과, 디지털콘텐츠/가상현실트랙, 뉴미디어광고/커뮤니케이션디자인 트랙    "},
    "INFJ":{"mbti":"<img src='photo/infj.png' alt = 'INFJ'>","major":"글로벌비즈니스트랙, 기업/경제분석트랙, 기업경영트랙,벤처경영트랙, 회계/재무경영트랙    "},
    "INTP":{"mbti":"<img src='photo/intp.png' alt = 'INTP'>","major":"  컴퓨터공학부, 어학계열트랙, 역사콘텐츠트랙, 역사문화큐레이션트랙    "},
    "INTJ":{"mbti":"<img src='photo/intj.png' alt = 'INTJ'>","major":"  컴퓨터공학부, 기계전자공학부, AI응용학과    "},
}

function next() {
    if(num==13) {
        $("#question").hide();
        $("#result").show();
        var str = "";
        ($("#EI").val()<2) ? str+="I" : str+="E";
        ($("#SN").val()<2) ? str+="N" : str+="S";
        ($("#TF").val()<2) ? str+="F" : str+="T";
        ($("#PJ").val()<2) ? str+="J" : str+="P";

        $("#mbti").html(result[str]["mbti"]);
        $("#major").html(result[str]["major"]);
    }
    else {
        $(".progress-bar").attr('style','width: calc(100/12*'+num+'%)');
        $("#pgrNum").html(num+'/12');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}

function replay() {
    location.reload(); // 새로고침
}
$("#A").click(function() {
    var type = $("#type").val(); 
    var preValue = $("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1)
    next();
});

$("#B").click(function() {
    next();
});

function copy() {
    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크가 복사되었습니다.");
    
}