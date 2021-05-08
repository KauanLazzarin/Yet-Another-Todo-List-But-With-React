import { ButtonIcon, TodoCard, TodoCardTitle, TodoDoneButton, TodoRemoveButton, TodosContainer } from "./styles";
import RemoveButtonSrc from './../../assets/delete.svg';
import DoneButtonSrc from './../../assets/done.svg';
import React from "react";
import { TodoContext } from "../../todo-context";

export function Todos () {

    const TodoContexts = React.useContext(TodoContext);
    const [currentTodos, setCurrentTodos] = React.useState([]);
    const todoRef = React.useRef();

    //Verificar cada mudança no estado das todos e modificar o array de todos
    React.useEffect(() => {
        setCurrentTodos(TodoContexts.todoList);
    }, [TodoContexts.todoList]);

    // Remover todo verificando o conteúdo
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

    // Buscar cada elemento e riscar conforme clicar no botão de done
    function doneTodo ({target}) {
        target.parentNode.parentNode.childNodes[0].style.color = 'grey';
        target.parentNode.parentNode.childNodes[0].style.textDecoration = 'line-through';
    };

    return (
        <TodosContainer>
            {
                currentTodos.map((todo, index) => {
                    return (
                        <TodoCard>
                            <TodoCardTitle ref={todoRef}>{todo}</TodoCardTitle>
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
            
                            <TodoDoneButton
                                onClick={doneTodo}
                            >
                                <ButtonIcon 
                                    src={DoneButtonSrc} 
                                    onClick={doneTodo}
                                />
                            </TodoDoneButton>
                        </TodoCard>
                    )
                })
            }
        </TodosContainer>
    )
}