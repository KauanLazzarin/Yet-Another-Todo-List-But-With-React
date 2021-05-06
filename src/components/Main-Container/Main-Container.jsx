import AddTodo from "../Add-Todo/AddTodo";
import { Todos } from "../Todos/Todos";
import { Container } from "./styles";

export default function MainContainer () {
    return (
        <Container>
            <AddTodo />
            <Todos />
        </Container>
    )
};