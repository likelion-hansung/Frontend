import { styled } from "styled-components";
import { useState } from "react";
import colors from "../../styles/colors";

const StyledButton = styled.button`
    background:${({is_done})=>
    (is_done? colors.transparent:colors.mainRed)
};
`

const TodoButton =({id,is_done, dataChangeListener})=>{
    return (
        <StyledButton is_done={is_done} onClick={()=>dataChangeListener(id)}>
        {is_done && <span>끝</span>}
        {!is_done && <span>완료</span>}
        </StyledButton>
    )
}

export default TodoButton;