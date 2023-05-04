const home = document.querySelector("#home");
const golden = document.querySelector("#golden");
const closeBtn = document.querySelector(".closeBtn");

home.addEventListener("click", function() {
    window.location.href = "main.html";
})

// 골든 리트리버를 누르면 밑에 정보가 나오도록 하기
function getGolden() {
    const info_golden = document.querySelector("#info_golden");
    info_golden.classList.remove("hidden");
}
closeBtn.addEventListener("submit", function() {
    info_golden.classList.add("hidden");
})
golden.addEventListener("click", getGolden);
