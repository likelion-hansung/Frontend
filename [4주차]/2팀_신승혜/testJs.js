$("#question").hide();
$("#result").hide();
 

var num =1;


var q = {
    1:{"title":"카페에 간 당신, 자리가 딱 두 개 남아있다. 당신의 선택은?","type":"EI","A":"혼자 작업할 수 있는 구석진 자리 ","B":"바깥 구경할 수 있는 카페 중간 자리"},
    2:{"title":"혼자 음료 5잔을 들게 됐다. 이때 당신의 생각은?","type":"SN","A":"조심히 들고가야지!","B":"가다가 엎지르면 어떡하지? 직원분께 말씀드려야 하나?"},
    3:{"title":"직원분이 주문을 잘못 받았다. 이때 당신의 생각은?","type":"FT","A":"많이 피곤하신가보다. 금방 다시 만들어주시겠지.","B":"왜 잘못 받으셨을까? 내가 발음이 뭉게졌나? 스피치 학원 다녀야하나…"},
    4:{"title":"모처럼 날씨 좋은 주말, 당신은 카페에 왜 가는가?","type":"FT","A":"가서 작업도 하고, 일기도 써야지~","B":"일단 가서 생각해야지! "},
}

var result = {
    "ENTJ": {"mbti": "앗! 뼈속까지 차가운🧊", "menu": "아이스 아메리카노", "image": "entj.png", "message": "결단력 있고 통솔력이 있어 리더십을 발휘해요. 목표를 이루기 위해 노력하고 확신을 가지며 효율적으로 일해요.", "tag": "#리더형 #효율성 #논리적 #강한자기주장"},
    "ENTP": {"mbti": "짧고 굵게 끝내자!☕︎", "menu": "에스프레소", "image": "entp.png", "message": "창의적이고 호기심이 많아요. 다양한 아이디어와 관점을 탐구하며 문제를 해결해요.", "tag": "#아이디어형 #직관력 #논리적 #창의적"},
    "ESFJ": {"mbti": "부드러운 우유에 계피로 반전매력 뽐내는♨️", "menu": "카푸치노", "image": "esfj.png", "message": "사교적이고 배려심이 많아요. 다른 사람들을 도우며 조화롭고 따뜻한 분위기를 조성해요.", "tag": "#따뜻함 #세심한 #감성적 #배려심"},
    "ESFP": {"mbti": "머리가 지끈하지만 중독적인🫐", "menu": "블루베리 스무디", "image": "esfp.png", "message": "체계적이고 신뢰성 있는 일 처리를 중요시해요. 책임감 있게 업무를 수행하고 조직 내에서 질서를 유지해요.", "tag": "#인식적 #현실적 #소통중시 #솔직함"},
    "ESTJ": {"mbti": "우유와 커피의 조화로움🥛", "menu": "카페라떼", "image": "estj.png", "message": "현실적이고 실용적이며 조직적이에요. 일과 책임을 중요시하며 계획을 세우고 실행하는 것을 좋아해요."}, "tag": "#감각적 #판단적 #리더쉽 #커뮤니케이션 #협력",
    "ESTP": {"mbti": "내리는 과정마저 읏 차가워!🥶", "menu": "콜드브루", "image": "estp.png", "message": "대담하고 활동적으로 움직이며, 현실적인 문제를 해결하는 데 능숙해요. 모험을 즐기며 주변 환경에서 최대한 즐거움을 추구해요.", "tag": "#모험가 #활동성 #즉흥성 #현실적"},
    "ENFJ": {"mbti": "부드러운 향 가득~♡", "menu": "바닐라라떼", "image": "enfj.png", "message": "사회적이고 동정심이 많아요. 다른 사람들을 도울 때 적극적으로 참여하며, 조화롭고 영감을 주는 리더십을 발휘해요.","tag": "#외향적 #직관적 #감성적 #배려심"},
    "ENFP": {"mbti": "어딜가나 톡!톡 튀는🥭", "menu": "망고스무디", "image": "enfp.png", "message": "열정적이고 즐거움을 추구해요. 다른 사람들과 연결되어 소통하며, 자유로운 아이디어와 상상력을 발휘해요.", "tag": "#인간골드리트리버 #감성적 #열정적 #인싸"},
    "INFJ": {"mbti": "정성과 사랑이 들어간🍵 드립커피", "menu": "드립커피", "image": "infj.png", "message": "도움을 주는 것을 좋아하고, 다른 사람들을 배려하는 마음으로 일을 처리해요. 조화롭고 안정적인 환경을 유지하며 신뢰성을 발휘해요.","tag": "#정성적 #섬세한 #안정성 #조화로움"},
    "INFP": {"mbti": "한 입에 걱정 근심 사라지는🍫", "menu": "초콜렛라떼", "image": "infp.png", "message": "예민하고 감수성이 풍부해요. 깊은 감정을 가지고 타인을 이해하며, 창의적인 표현으로 자신의 감성을 나타내요.", "tag": "#걱정부자 #배려심 #위로왕"},
    "INTJ": {"mbti": "따뜻하지만 시원한 반전매력🍃", "menu": "페퍼민트티", "image": "intj.png", "message": "신중하고 체계적으로 일을 처리해요. 현실적이고 신뢰성 있는 결정을 내리며, 확실한 계획을 세우고 실천해요.", "tag": "#계획적 #내향적 #친해지면말많음 #인간고양이"},
    "INTP": {"mbti": "민트가 치약맛이 아니라 치약이 민트맛입니다💚 민트초코스무디", "menu": "민트초코스무디", "image": "intp.png", "message": "비판적이고 분석적인 사고로 문제를 해결해요. 독창적이고 창의적인 아이디어를 제시하며, 지적 호기심으로 지식을 탐구해요.", "tag": "#리더형 #효율성 #논리적 #강한자기주장"},
    "ISTJ": {"mbti": "봄에만 볼 수 있는 특별하고 달콤한🍓", "menu": "딸기라떼", "image": "istj.png", "message": "신중하고 책임감이 강해요. 체계적으로 일하며 확실한 결정을 내리고자 노력해요.", "tag": "#원리원칙주의 #내향적 #개인주의 #생각많음"},
    "ISTP": {"mbti": "상큼한듯 달콤한 미묘한🍊", "menu": "한라봉주스", "image": "istp.png", "message": "조용하고 현실적인 사고로 문제를 해결해요. 손재주가 뛰어나며, 자신의 공간과 독립성을 중요시해요.", "tag": "#내향적 #사고적 #현실적 #경험중시"},
    "ISFJ": {"mbti": "깔끔한 게 좋지만 커피는 싫어!🍑", "menu": "복숭아 아이스티", "image": "isfj.png", "message": "진정성과 동정심이 넘치며, 타인의 감정에 공감하며 이해해요. 민감하고 직관적인 통찰력을 가지고 타인을 도울 준비가 되어 있어요.", "tag": "#계획적 #뭐든지중간 #배려심 #츤데레"},
    "ISFP": {"mbti": "탄산에 한 번, 키위에 한 번! 톡 쏘는🥝", "menu": "키위에이드", "image": "isfp.png", "message": "예술적이고 감각적인 면모를 가지고 있어요. 자유로운 표현과 조화로운 분위기를 창출해요.", "tag": "#내향적 #현실적 #즉흥적 #감성적"},
};

function start(){
    $("#start").hide();
    $("#question").show();
    next();
}

function replay(){ 
    window.location.href = "index.html";
}

function next(){
    if(num==5){
        $("#question").hide();
        $("#result").show();
        var str="";
        ($("#EI").val()<1) ? str+="I" : str+="E";
        ($("#SN").val()<1) ? str+="S" : str+="N";
        ($("#FT").val()<1) ? str+="T" : str+="F";
        ($("#FT").val()<1) ? str+="J" : str+="P";

        $("#mbti").html(result[str]["mbti"]);
        $("#result-menu").html(result[str]["menu"]);
        $("#result-image").attr("src", result[str]["image"]);
        $("#result-message").html(result[str]["message"]);
        $("#result-tag").html(result[str]["tag"]);
    }
    else{
        $(".progress-bar").attr('style','width: calc(100/4*'+num+'%)');
        $("#pgrNum").html(num+'/4');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}


$("#A").click(function(){
    var type=$("#type").val();
    var preValue = $("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);
    next();
});
$("#B").click(function(){
    next();
});