import TodoItem from "../list-item/todo-item";

const TodoList = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <TodoItem
                    key={index}
                    img={require(`../../${item.img}`)}
                    title={item.title}
                />
            ))}
        </>
    );
};

export default TodoList;
