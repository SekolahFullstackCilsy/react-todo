import React from 'react';

export default function Todo({ no, data, onCompletedTodo }) {
  const onCompleted = (id) => {
    onCompletedTodo(id)
  }
  const fontStyle = data.completed ? 'line-through' : 'none'

  return (
    <div>
      <h4
        style={{
          textDecoration: fontStyle
        }}
      >{no}. {data.text}</h4>
      {!data.completed && <button onClick={() => onCompleted(data.id)}>Done</button>}
    </div>
  )
}