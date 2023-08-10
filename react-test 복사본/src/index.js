
import ReactDOM from 'react-dom/client';

let product = "game";

function handleClick() {
  alert("곧 실행됩니다.");
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  (<>
    <h1>안녕 리액트!</h1>
    <p>나만의 {product.toUpperCase()} 만들기</p>
    <button onClick={handleClick}>확인</button>
  </>)
);

