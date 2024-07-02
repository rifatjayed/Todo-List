import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>

      <div className="bg-primary-gradient w-full h-full rounded-xl   p-[5px]">
        {/* <div className="bg-white p-5 flex justify-center items-center rounded-md font-semibold text-2xl">
          <p>There is no task pending</p>
        </div> */}

        <div className="bg-white rounded-xl p-5 w-full h-full space-y-3 ">
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
