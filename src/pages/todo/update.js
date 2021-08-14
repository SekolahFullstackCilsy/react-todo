import { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import useRouter from 'use-react-router';

// import { updateTodo, getTodoById } from '../../store/action/todo';

const Update = (props) => {
  const { todo, getTodoDetailById, updateTodo } = props;
  const { match, history } = useRouter();
  const [selectedTodo, setSelectedTodo] = useState({
    id: 0,
    name: '',
    description: '',
  });

  useEffect(() => { // Component Didmount life cycle
    getTodoDetailById(match.params.id);
  }, [getTodoDetailById, match.params.id]);

  useEffect(() => {
    if (todo != null) {
      setSelectedTodo(todo);
    }
  },[todo]);

  const onChangeInput = (type) => (e) => {
    setSelectedTodo({
      ...selectedTodo,
      [type]: e.currentTarget.value
    });
  };

  const onSubmitButton = () => {
    updateTodo(selectedTodo);
  };

  return (
    <div>
      Update Todo Page
      <div>
        <input type="text" onChange={onChangeInput('name')} value={selectedTodo.name} />
        <input type="text" onChange={onChangeInput('description')} value={selectedTodo.description} />
        <button type="button" onClick={onSubmitButton}> Update </button>
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   updateTodo: (todo) => dispatch(updateTodo(todo)),
//   getTodoDetailById: (id) => dispatch(getTodoById(id)),
// });

// const mapStateToProps = (state) => ({
//   todo: state.todoReducer.todo
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Update);
export default Update