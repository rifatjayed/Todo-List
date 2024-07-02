import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <div>
      <Container>
        <h1>My Todos</h1>
        <TodoContainer></TodoContainer>
      </Container>
    </div>
  );
};

export default Todo;
