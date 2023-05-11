$("#question").hide();
$("#result").hide();

var num =1;

var q = {
    1:{"title":"편의점에 갔더니 못보던 새로운 컵라면이 보인다.","type":"EI","A":"새로운 라면이 나왔다고??? 당장 먹어봐야지!","B":"새로운 거 관심없고 원래 알던 맛으로 고른다!"},
    2:{"title":"조별과제를 하는데 무임승차가 있다.","type":"SN","A":"제대로 못하는 팀원들을 제명시킨다.","B":"사정이 있었겠지.... 꾹 참는다."},
    3:{"title":"친구와의 약속이 갑자기 취소됐다.","type":"FT","A":"급하게 다른 친구한테 연락해서 나오라고 한다.","B":"아싸 개이득! 혼자 집에서 쉰다."},
}

var result = {
    "ESF":{"mbti":"강아지","explain":"강아지를 닮은 당신! 호기심이 많고 어느 순간에나 인싸 성격을 가지고 있어요. 강아지처럼 남들이 좋아하는 성격을 지녔으며 매사에 호기심이 많아서 새로운 도전을 좋아하고, 활동적인 것을 좋아해요!","img":"dog.png"},
    "EST":{"mbti":"거북이","explain":"거북이를 닮은 당신! 본인이 맡은 일에 책임감을 가지고 매사에 인싸적인 성격을 가졌어요. 독립적이면서도 따뜻한 성격을 지녔군요!","img":"거북이.png"},
    "ENF":{"mbti":"두더지","explain": "두더지를 닮은 당신! 다양한 것을 수용할 줄 아는 부드러운 성격을 가지고 있어요. 따뜻하고 순한 마음에 끌려 사람들이 많이 다가올 것 같아요!","img":"두더지.png"},
    "ENT":{"mbti":"사슴", "explain" : "사슴을 닮은 당신! 뒤끝없이 시원시원한 성격을 가지고 있어요. 매사에 적극적이며 모든 일에 솔선수범하는 편인 것 같아요. 리더의 성향이 강할 것 같네요!","img":"사슴.png"},
    "ISF":{"mbti":"악어", "explain" : "악어를 닮은 당신! 시크하고 건조하지만 내 사람에게는 하염없이 잘해주는 성격이에요. 귀찮은 것 보다는 효율적인 일을 좋아하는 편이네요. 미루는 것을 좋아하는 성격일 것 같아요!","img":"악어.png"},
    "IST":{"mbti":"여우", "explain" : "여우를 닮은 당신! 현실적이고 야무지지만 화끈한 면도 가지고 있네요. 남들이 나에 대해 무슨 생각하든 관심이 없는 편이에요! 즉흥적인 것을 좋아하는 성격이네요!","img":"여우.png"},
    "INF":{"mbti":"호랑이", "explain": "호랑이를 닮은 당신! 톡톡 튀는 낙천적인 사람이에요. 복잡한 것보다는 단순한 것을 좋아해요! 여기저기 참여하고 싶고 모르는 사람이랑도 잘 친해지는 성격 같아요!","img":"호랑이.png"},
    "INT":{"mbti":"오리", "explain": "오리를 닮은 당신! 누구에게나 잘 맞춰주고 배려가 많은 성격을 지녔어요. 공감능력이 좋아서 상담을 잘해줘요. 현실적인 면도 발달해 있어서 계획을 잘 세우고 잘 지킬 것 같아요!","img":"오리.png"},
}

function start(){
    $("#start").hide();
    $("#question").show();
    next();
}

function next(){
    if(num==4){
        $("#question").hide();
        $("#result").show();
        var str="";
        ($("#EI").val()<1) ? str+="I" : str+="E";
        ($("#SN").val()<1) ? str+="N" : str+="S";
        ($("#FT").val()<1) ? str+="T" : str+="F";

        $("#img").attr("src",result[str]["img"]);
        $("#mbti").html(result[str]["mbti"]);
        $("#explain").html(result[str]["explain"]);
    }
    else{
        $(".progress-bar").attr('style','width: calc(100/3*'+num+'%)');
        $("#pgrNum").html(num+'/3');
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