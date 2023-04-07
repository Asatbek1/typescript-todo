import { ITodo } from "../types/data";
import styles from "./TodoItem.module.css";
interface ItodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
const TodoItem: React.FC<ItodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;
  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      {title}
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  );
};
export { TodoItem };
