import React, {useState} from 'react';
import ActionTodo from './ActionTodo';

export default function Todos() {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Learn React', completed: false},
    {id: 2, text: 'Learn Js', completed: true},
    {id: 3, text: 'Learn HTML', completed: true},
  ]);

  const onAddTodo = (text) => {
    todos.push({
      id: todos.length + 1,
        text: text,
        completed: false
    })
    setTodos([
      ...todos,
    ])
  }

  return (
    <div>
      {todos.map((val, key) => {
        return (
          <h4 key={key}>{key + 1}. {val.text}</h4>
        )
      })}
      <ActionTodo onAddTodo={onAddTodo}/>
    </div>
  )
}