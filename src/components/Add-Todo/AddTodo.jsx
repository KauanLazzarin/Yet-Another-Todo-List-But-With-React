import { AddButton, ButtonIcon, Input, Label } from "./styles";
import IconSrc from './../../assets/plus.svg';
import React from "react";
import { TodoContext } from "../../todo-context";

export default function AddTodo () {
    const TodoContexts = React.useContext(TodoContext);
    const [addingTodo, setAddingTodo] = React.useState('');

    function handleChangeValue ({target}) {
        setAddingTodo(target.value);

        return true;
    };  

    function handleAddTodo () {
        TodoContexts.handleTodoAdd(addingTodo);

        return true;
    };

    return (
        <>
            <Label>
                <Input 
                    onChange={handleChangeValue} 
                    type="text" 
                    id="add-todo" 
                />

                <AddButton onClick={handleAddTodo}>
                    <ButtonIcon src={IconSrc} />
                </AddButton>
                
            </Label>
        </>
    );
};