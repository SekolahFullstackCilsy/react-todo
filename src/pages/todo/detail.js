import { useEffect } from 'react';
import { connect } from 'react-redux';
import useRouter from 'use-react-router';

import { getTodoById } from '../../store/actions/todo';

const Detail = (props) => {
  
  const { todo, getTodoDetailById } = props;
  const { match, history } = useRouter();
  
  useEffect(() => { // Component Didmount life cycle
    getTodoDetailById(match.params.id);
  }, [getTodoDetailById, match.params.id])
  
  return (
    <div>
      {JSON.stringify(props.todo)}
      Detail Todo Page
    </div>
  )
}

const mapStateToProps = (state) => ({
  todo: state.todoReducer.todo
});

const mapDispatchToProps = (dispatch) => ({
  getTodoDetailById: (id) => dispatch(getTodoById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);