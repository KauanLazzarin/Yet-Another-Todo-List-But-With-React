import MainContainer from "./components/Main-Container/Main-Container";
import { TodoProvider } from "./todo-context";

function App() {

  return (
    <TodoProvider>
      <MainContainer>

      </MainContainer>
    </TodoProvider>
  );
}

export default App;
