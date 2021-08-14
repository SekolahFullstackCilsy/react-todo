import React, { useState } from 'react';
// import { connect } from 'react-redux';

// import { addTodo } from '../../store/action/todo';

const Add = (props) => {
  const [todo, setTodo] = useState({
    'name': '',
    'description': ''
  });

  const handleInput = (e, inputType) => {
    e.preventDefault();
    onChangeInput(e.target.value, inputType);
  };

  const onChangeInput = (type) => (e) => {
    setTodo({
      ...todo,
      [type]: e.currentTarget.value
    });
  };

  const onClickButton = () => {
    props.createTodo(todo);
  };

  return (
    <div>
    Add Todo Page
    <div>
      <form> 
        <div>
          <label>Name</label>
          <input type="text" value={todo.name} onChange={handleInput('name')}/>
        </div>
        <div>
          <label>Description</label>
          <input type="text" value={todo.description} onChange={handleInput('description')}/>
        </div>
        <div>
          <button type="button" onClick={onClickButton}>CREATE</button>
        </div>
      </form>
    </div>
  </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   createTodo: (todo) => dispatch(addTodo(todo))
// });

export default Add;
// export default connect(null, mapDispatchToProps)(Add);