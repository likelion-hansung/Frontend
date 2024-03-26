import TodoItem from "../../Item/todo-item";
import { useEffect } from "react";
import styled from "styled-components";

const StyledList=styled.div`
    
`

const TodoList=({data,dataChangeListener})=>{
    
    return (
        <StyledList>
        {data.map((item,index)=>{
            return (
                <TodoItem
                key={index}
                id={item.id}
                title={item.title}
                img={item.image}
                is_done={item.is_done}
                dataChangeListener={dataChangeListener}
                />
            )
        }
    )}
    </StyledList>
    )
}
export default TodoList;