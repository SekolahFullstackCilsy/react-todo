import { GET_TODO, GET_TODO_BY_ID, DELETE_TODO_BY_ID } from '../constants'
import axios from 'axios'

const API_URL = 'http://localhost:3000'

export const getTodos = () => {
  // request ke Backend
  return (dispatch) => {
    axios.get(`${API_URL}/api/todos`).then((response) => {
      dispatch({
        type: GET_TODO,
        payload: response.data.data
      })
    })
  }

  // return {
  //   type: GET_TODO,
  //   payload: [
  //     {
  //       id: 1,
  //       name: 'Belajar Fullstack 1',
  //       description: 'Belajar Fullstack untuk tujuan 1',
  //     },
  //     {
  //       id: 2,
  //       name: 'Belajar Fullstack 2',
  //       description: 'Belajar Fullstack untuk tujuan 2',
  //     },
  //     {
  //       id: 3,
  //       name: 'Belajar Fullstack 3',
  //       description: 'Belajar Fullstack untuk tujuan 3',
  //     },
  //     {
  //       id: 4,
  //       name: 'Belajar Fullstack 4',
  //       description: 'Belajar Fullstack untuk tujuan 4',
  //     },
  //   ],
  // };
};

export const getTodoById = (id) => {
  return {
    type: GET_TODO_BY_ID,
    payload: id
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO_BY_ID,
    payload: id
  }
}

