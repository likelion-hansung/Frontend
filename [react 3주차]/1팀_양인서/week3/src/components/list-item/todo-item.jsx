import { styled } from "styled-components";
import MyButton from "../button/my-button";
import { useState } from 'react';

const StyleItem = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    background: pink;
    width: 80%;
    padding: 1vw 0 1vw 0;
`;

const TodoBox = styled.div`
    background-color: ${({ isEnd }) => (isEnd ? "#666a73" : "white")};
    width: 90%;
    height: 80px;
    display:flex;
    justify-content: space-between;
    padding: 0 2vw 0 2vw;
    align-items: center;
    border: 2px solid black;
`;

const TodoItem = ({ img, title }) => {
    const [isEnd, setIsEnd] = useState(false);

    const handleButtonClick = () => {
        setIsEnd(true);
    };

    return (
        <StyleItem>
            <TodoBox isEnd={isEnd}>
                <img src={img} alt="이미지"/>
                {title}
                <MyButton text="완료" onClick={handleButtonClick} isEnd={isEnd} />
            </TodoBox>
        </StyleItem>
    );
}

export default TodoItem;
