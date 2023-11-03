import {styled} from "styled-components"
import TodoButton from "../button/todo-button";
import colors from "../../styles/colors";

const StyleItem=styled.div`
    display:flex;
    height:15vh;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border:2px solid black;
    margin-top : 0.5%;
    padding-left:10%;
    padding-right:10%;
    background: ${({is_done}) => 
    (is_done ? colors.mainGray : colors.mainWhite)
}
`;
    

const TodoItem = (props) => {
    const { id, title, img, is_done, dataChangeListener } = props;  

    return (
        <StyleItem is_done={is_done}>
            <img src={require(`../../${img}`)} alt="이미지"/>
            <p>{title}</p>
            <TodoButton id={id} is_done={is_done} dataChangeListener={dataChangeListener}/>
        </StyleItem>
    
    )
}
export default TodoItem;