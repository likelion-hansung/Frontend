import { styled } from "styled-components";
import { useState } from "react";

const StyledButton = styled.button`
    background-color: ${({ isEnd }) => (isEnd ? "gray" : "tomato")};
    cursor: ${({ isEnd }) => (isEnd ? "not-allowed" : "pointer")};
`;

const MyButton = ({ text, onClick, isEnd }) => {
    const [buttonText, setButtonText] = useState(text);

    const handleClick = () => {
        if (!isEnd) {
            onClick();
            setButtonText("끝");
        }
    };

    return (
        <StyledButton isEnd={isEnd} onClick={handleClick} disabled={isEnd}>
            {buttonText}
        </StyledButton>
    );
};

export default MyButton;
