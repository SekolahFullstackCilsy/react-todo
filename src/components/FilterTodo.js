import React, {useState} from 'react';

export default function FilterTodo(props) {
  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState(false);

  const onFilter = (e) => {
    if (e.target.type === 'checkbox') {
      setChecked(e.target.checked)
      props.onFilterTodo(search, e.target.checked)
    } else {
      setSearch(e.target.value)
      props.onFilterTodo(e.target.value, checked)
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search todo ..."
        value={search}
        onChange={(e) => onFilter(e)}
      />
      <input
        type="checkbox"
        value={checked}
        onChange={(e) => onFilter(e)}
      /> Hide Completed Todo
    </div>
  )
}