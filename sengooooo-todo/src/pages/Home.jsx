import { useState } from "react";
import { useEffect } from "react";
import TodoList from "../components/list/todo-list";
import TodoDataset from "../util/todo-dataset";

const Home = () => {
    const [data, setData] = useState(TodoDataset);
    const [result, setResult] = useState(data)

    useEffect(()=>{
        const sortedData = [...data].sort((a,b) => {
            if(a.is_done !== b.is_done){
                return a.is_done ? 1 : -1;
            } else{
                return a.id - b.id;
            }
        });
        setResult(sortedData);
    }, [data])

    const dataChangeListener = (key) => {
        const targetId = key;
        const updatedTodoDataset = data.map((todo)=>{
            if(todo.id === targetId){
                return {
                    ...todo,
                    is_done: true,
                };
            }
            return todo;
        });
        setData(updatedTodoDataset)
    }

    return(
        <TodoList data={result} dataChangeListener={dataChangeListener}/>
    );
};

export default Home;