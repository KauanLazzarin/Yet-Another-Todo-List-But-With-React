import { ButtonIcon, TodoCard, TodoCardTitle, TodoDoneButton, TodoRemoveButton, TodosContainer } from "./styles";
import RemoveButtonSrc from './../../assets/delete.svg';
import DoneButtonSrc from './../../assets/done.svg';
import React from "react";
import { TodoContext } from "../../todo-context";

export function Todos () {

    const TodoContexts = React.useContext(TodoContext);
    const [currentTodos, setCurrentTodos] = React.useState([]);

    React.useEffect(() => {
        setCurrentTodos(TodoContexts.todoList);
    }, [TodoContexts.todoList]);

    function removeTodo ({target}) {
        const newArray = [];
        
        currentTodos.forEach((todo) => {
            if (todo !== target.getAttribute('content')) {
                newArray.push(todo);
            };
        });

        setCurrentTodos(newArray);
        TodoContexts.setTodoList(newArray);
        return true;
    };

    return (
        <TodosContainer>
            {
                currentTodos.map((todo, index) => {
                    return (
                        <TodoCard>
                            <TodoCardTitle>{todo}</TodoCardTitle>
                            <TodoRemoveButton
                                key={todo + index} 
                                content={todo}
                                todoid={index} 
                                onClick={removeTodo} 
                            >
                                <ButtonIcon  
                                    onClick={removeTodo} 
                                    content={todo}
                                    src={RemoveButtonSrc} 
                                />
                            </TodoRemoveButton>
            
                            <TodoDoneButton>
                                <ButtonIcon src={DoneButtonSrc} />
                            </TodoDoneButton>
                        </TodoCard>
                    )
                })
            }
        </TodosContainer>
    )
}