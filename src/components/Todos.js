import React, {useState} from 'react';
import ActionTodo from './ActionTodo';
import FilterTodo from './FilterTodo';
import Todo from './Todo';

export default function Todos() {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Learn React', completed: false},
    {id: 2, text: 'Learn Js', completed: true},
    {id: 3, text: 'Learn HTML', completed: true},
  ]);
  const [filter, setFilter] = useState({
    search: '',
    completed: false
  });

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

  const onFilterTodo = (search, completed) => {
    setFilter({search, completed})
  }

  const onCompletedTodo = (id) => {
    const todo = todos.find((val) => val.id === id)
    todo.completed = true
    setTodos([...todos])
  }

  const filteredTodos = todos.filter((todo) => {
    const searchText =
      todo.text.toLocaleLowerCase()
        .includes(filter.search.toLocaleLowerCase())
    const hideCompleted = !filter.completed || !todo.completed

    return searchText && hideCompleted
  })

  return (
    <div>
      <FilterTodo onFilterTodo={onFilterTodo} />
      {filteredTodos.map((val, key) => {
        return (
          <Todo
            key={key}
            no={key + 1}
            data={val}
            onCompletedTodo={onCompletedTodo}
          />
        )
      })}
      <br />
      <ActionTodo onAddTodo={onAddTodo} />
    </div>
  )
}