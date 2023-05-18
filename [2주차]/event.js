const pets = document.querySelector("#pets"); // document.getElementById("pets");
const login = document.querySelector("#login");
const input_id = document.querySelector("#input_id");
const greeting = document.getElementById("greeting"); 
const idForm = document.querySelector(".idForm");
// 반려동물 nav바를 눌렀을 때 다른 html이 연결되는 이벤트 
function info() {
    window.location.href = 'info_dogs.html';
}
pets.addEventListener("click", info);

// id입력
const hidden = "hidden";
const id_key = "id";
function hadnleForm(e) {
    e.preventDefault(); // 새로고침해도 초기화되지 않도록
    input_id.classList.add(hidden);
    login.setAttribute('class', 'hidden');
    const inputValue = input_id.value;
    localStorage.setItem(id_key, input_id.value);
    paintId(inputValue);
}
function paintId(inputValue) {
    greeting.classList.remove(hidden);
    greeting.innerText =  inputValue + "님 반갑습니다 :)";
}
const saveId = localStorage.getItem(id_key);
if(saveId === null) {
    idForm.addEventListener("submit", hadnleForm);
} else {
    input_id.classList.add(hidden);
    login.setAttribute('class', 'hidden');
    paintId(saveId);
}

