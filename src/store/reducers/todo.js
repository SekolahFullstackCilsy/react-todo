import { GET_TODO, GET_TODO_BY_ID, DELETE_TODO_BY_ID } from '../constants'

const initialState = {
  todos: [],
  todo: {
    id: null,
    name: null,
    description: null
  }
}

// type = GET_TODO, GET_TODO_BY_ID
// payload = data = [{id: 1, name: 'asfaf'}], 

const todoReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_TODO:
      return {
        ...state,
        todos: payload
      }

    case GET_TODO_BY_ID:
      const findTodo = state.todos.find((todo) => todo.id === payload);
      return {
        ...state,
        todo: findTodo
      }
    
    case DELETE_TODO_BY_ID:
      const todos = state.todos.filter((todo) => todo.id !== payload);
      return {
        ...state,
        todos: todos
      }
    

  
    default:
      return state
  }
}

export default todoReducer