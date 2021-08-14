import { GET_USERS, GET_USER_BY_ID, SAVE_USER } from '../constants'
import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const getUsers = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/users`).then((response) => {
      dispatch({
        type: GET_USERS,
        payload: response.data
      })
    })
  }
};

export const getUserById = (id) => {
  return (dispatch) => {
    axios.get(`${API_URL}/users/${id}`).then((response) => {
      dispatch({
        type: GET_USER_BY_ID,
        payload: response.data
      })
    }).catch(e => {
      console.error(e)
    })
  }
}

// {
//   name: '',
//   username: '',
//   email: '',
//   address: {
//     street: ''
//   },
//   company: {
//     name: '',
//   }
// }

export const saveUser = (formData) => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
      name: formData.name,
        username: formData.username,
        email: formData.email,
        address: {
          street: formData.street
        },
        company: {
          name: formData.companyName,
        }
      }), 
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      
        const res = await response.json()
        console.log(res)
        dispatch({
          type: SAVE_USER,
          payload: 'Success Add User'
        })
        dispatch(getUsers())
      // })
    // .then((json) => console.log(json));
    // axios.post(`${API_URL}/users`, {
    //   name: formData.name,
    //   username: formData.username,
    //   email: formData.email,
    //   address: {
    //     street: formData.street
    //   },
    //   company: {
    //     name: formData.companyName,
    //   }
    // }, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then((response) => {
    //   console.log(response)
      // dispatch({
      //   type: SAVE_USER,
      //   payload: 'Success Add User'
      // })
      // dispatch(getUsers())
    // }).catch(e => {
    //   console.error(e)
    // })
  }
}