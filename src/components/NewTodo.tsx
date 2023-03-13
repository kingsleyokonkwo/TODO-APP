import React, {useRef} from "react";
import './NewTodo.css'

interface addedTodo {
    onAddTodo: (todoText: string) => void
}

export const NewTodo: React.FC<addedTodo> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);
    
    const clrInput = () => {
        textInputRef.current!.value = ""
    }

    const todoSubmitHandler = (e: React.FormEvent)  => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        if (enteredText) {
            props.onAddTodo(enteredText)
        } else {
            alert("Add todo")
        }
        clrInput()
    }

    
  return (
    <div>
      <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
          <label htmlFor="todo-text">Todo Text</label>
          <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button>ADD TODO</button>
      </form>
    </div>
  );
};
