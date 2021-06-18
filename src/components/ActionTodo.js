import React, {useState} from 'react';

export default function ActionTodo(props) {
  const [text, setText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault()
    props.onAddTodo(text)
    setText('')
  }

  return (
    <div>
      <form onSubmit={(e) => handleAddTodo(e)}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}