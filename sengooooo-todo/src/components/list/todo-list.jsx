import { useEffect } from "react";
import TodoItem from "../item/todo-item";
import styled from 'styled-components';

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content : center;
    margin-left: 15rem;
    margin-right: 15rem;
    padding : 3rem;
    background:pink;

`


const TodoList = ({data, dataChangeListener}) => {

    return(
        <StyledList>
            {data.map((item, index)=>{
                return(
                    <TodoItem
                        key={index}
                        id={item.id}
                        title={item.title}
                        img={item.image}
                        is_done={item.is_done}
                        dataChangeListener = {dataChangeListener}
                    />
                )
            })}
        </StyledList>
    )
}

export default TodoList;
