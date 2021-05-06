import React from 'react';

export const TodoContext = React.createContext({});

export function TodoProvider ({children}) {
    const [todoList, setTodoList] = React.useState([]);


    function handleTodoAdd (textContent) {
        setTodoList([...todoList, textContent]);

        return true;
    };


    function removeTodo (todoId) {
        todoList.splice(todoId, 1);

        return true;
    };

    return (
        <TodoContext.Provider value={{
            todoList,
            removeTodo,
            setTodoList,
            handleTodoAdd
        }}>

            {children}
        </TodoContext.Provider>
    )
};