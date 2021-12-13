import react, { useState, useEffect } from 'react';

export default function Count() {
  const [input, setInput] = useState("");
  const [lastIndex, setLastIndex] = useState(0);
  const [todolist, setTodolist] = useState([
    "Toto",
    "faire la vaiselle",
  ]);

  function addTodo() {
    setTodolist([...todolist, input]);
  }

  function deleteTodo(removeIndex) {
    setTodolist(todolist.filter(function(item, index) { 
      if (index !== removeIndex) return item;
    }));
  }

  useEffect(() => {
    localStorage.setItem('todos', todolist);
    setLastIndex(todolist.length - 1);
  }, [todolist]);

  return (
    <div>
      <input value={input} onInput={e => setInput(e.target.value)}/>
      <button onClick={() => addTodo()}>Add</button>
      <h1>Todo :</h1>
      { todolist.map((item, index) => {
        return (
          <div key={index}>
            <p style={{color: index === lastIndex ? "red" : ""}}>{index} {item} <span onClick={() => deleteTodo(index)}>Supprimer</span></p>
          </div>
        )
      })}
    </div>
  );
}
