import {styled} from "styled-components"
import colors from "../../styles/colors"

const StyledButton = styled.button`
    background : ${({is_done}) => 
        (is_done ? colors.transparent : colors.mainRed)
    };

    &:hover{
        filter: brightness(0.6);
        cursor: ${({is_done})=>
            (is_done) ? "default" : "pointer"}
        }
    }
`

const TodoButton = ({id, is_done, dataChangeListener}) => {
    return(
        <StyledButton is_done={is_done} onClick={() => dataChangeListener(id)} disabled={is_done}>
            {is_done && <span>끝</span>}
            {!is_done && <span>완료</span>}
        </StyledButton>
    )
}

export default TodoButton;