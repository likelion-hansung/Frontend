import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoDataset from "../util/todo-dataset";
import TodoList from "../components/list/todo-list";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Home = () => {
    const [data, setData] = useState(TodoDataset);

    useEffect(() => {
        setData(TodoDataset);
    }, []);

    return (
        <HomeContainer>
            <TodoList data={data} />
        </HomeContainer>
    );
}

export default Home;
