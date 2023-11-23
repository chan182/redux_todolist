import shortid from "shortid";

const ADD_TODO = "ADD_TODO";

export const todos = (payload) => {
    return { type: ADD_TODO, payload };
};

const initialState = {
    todos: [
        {
            id: shortid.generate(),
            title: "제목1",
            contents: "내용122",
            isDone: false,
        },
        {
            id: shortid.generate(),
            title: "제목1",
            contents: "내용1",
            isDone: false,
        },
    ],
};

// 리듀서
const todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }; //TODO: 여기 작성

        case "DELETE_TODO":
            return; //TODO: 여기 작성

        case "SWITCH_TODO":
            return; //TODO: 여기 작성

        default:
            return state;
    }
};

export default todos;
