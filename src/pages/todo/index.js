import React from 'react';
import { connect } from 'react-redux';
import useRouter from 'use-react-router';

import { getTodos, deleteTodo } from '../../store/actions/todo';

const List = (props) => {
  console.log(props)
  // props.getTodo();

  const { match, history } = useRouter();

  const onClickGetButton = (id) => () => {
    history.push(`/todo/${id}`);
  };

  const onClickEditButton = (id) => {
    history.push(`/todo/${id}/update`);
  };

  const onDelete = (id) => {
    props.deleteTodo(id)
  };
  
  return (
    <div>
      List Todo Page
      {
        props.todos.map(element => 
          (
            <div key={element.id}>
              <label>{element.id}</label>
              <label>{element.title}</label>
              <label>{element.description}</label>
              <div>
                <button type="button" onClick={() => onClickGetButton(element.id)}>Get</button>
                <button type="button" onClick={() => onDelete(element.id)}>Delete</button>
                {/* <button type="button" onClick={onClickEditButton(element.id)}>Edit</button> */}
              </div>
            </div>
          ))
      }

      <button onClick={() => props.getTodos()}>
        Get Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos()),
    deleteTodo: (id) => dispatch(deleteTodo(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);