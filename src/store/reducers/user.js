import { GET_USERS, GET_USER_BY_ID, SAVE_USER } from '../constants'

const initialState = {
  users: [],
  user: {}
}

// type = GET_TODO, GET_TODO_BY_ID
// payload = data = [{id: 1, name: 'asfaf'}], 

const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload
      }
    
    case GET_USER_BY_ID:
      return {
        ...state,
        user: payload
      }
    case SAVE_USER:
      return {
        ...state,
      }
  
    default:
      return state
  }
}

export default userReducer