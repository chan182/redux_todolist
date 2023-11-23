import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import todos from "../redux/modules/todos";

const Home = () => {
    const [title, setTitle] = useState();
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (title === "") return;

        dispatch(
            todos({
                id: todos.length + 1,
                title,
            })
        );
    };

    return (
        <StFormContainer>
            <form onSubmit={onSubmitHandler}>
                <label> 할 일 리스트</label>
                <Stinput
                    type="text"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <StButton>추가하기</StButton>
            </form>
        </StFormContainer>
    );
};

export default Home;

const StFormContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 30px;
`;

const Stinput = styled.div`
    border: 1px solid lightgrey;
    height: 30px;
    width: 200px;
    border-radius: 10px;
    outline: none;
    margin: 10px 24px;
`;

const StButton = styled.button`
    border: none;
    background-color: lightpink;
    cursor: pointer;
    border-radius: 10px;
    width: 100px;
    padding: 8px;
`;
