import { useSelector } from "react-redux";
import styled from "styled-components";

const Detail = () => {
    const { todos } = useSelector((state) => state.todos);
    return (
        <StTodos>
            {todos.map((todo) => {
                <StTodo key={todo.id}>{todo.title}</StTodo>;
            })}
        </StTodos>
    );
};

export default Detail;

const StTodos = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

const StTodo = styled.div`
    border: 1px solid black;
    height: 100px;
`;
