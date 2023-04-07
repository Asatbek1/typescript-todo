import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/data";
import styles from './TodoList.module.css';
interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}
const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, toggleTodo, removeTodo } = props;
  return (
    <div className={styles.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};
export { TodoList };
