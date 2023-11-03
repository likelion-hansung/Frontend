import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoDataset from "../util/todo-dataset";
import TodoList from "../components/list/todo-list";

const Home = () => {
    const [data, setData] = useState(TodoDataset);
    const [result, setResult] = useState(data)

    useEffect(() => {
        const sortedData = [...data].sort((a, b) => {
            if (a.is_done !== b.is_done) {
                return a.is_done ? 1 : -1;
            } else {
                return a.id - b.id;
            }
        });

        setData(sortedData)
    }, [data]);

    const dataChangeListener = (key) => {
        const targetId = key;
        const updatedTodoDataset = data.map((todo) => {
            if (todo.id === targetId) {
                return {
                    ...todo,
                    is_done: true,
                };
            }
            return todo;
        });

        setData(updatedTodoDataset);
    }

    return (
        
            <TodoList data={data} dataChangeListener={dataChangeListener} />
       
    );
}

export default Home;
