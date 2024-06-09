import { Task } from '@/types';
import Todo from './Todo';

interface TodoListProps {
  todos: Task[];
}

const TodoList = ({ todos }: TodoListProps) => {
  //↓CSRの場合(Client-Side Rendering)
  // useEffect(() => {
  //   const getAllTodos = async () => {
  //     await fetch("localhost:3001/tasks")
  //   };
  // }, [])

  return (
    <ul className='space-y-3'>
      {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList;
