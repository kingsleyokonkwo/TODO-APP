import "./TodoList.css"

interface TodoListProps  {
    items: {id: string, text: string}[];
    onDeleteTodo: (id: string) => void
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
