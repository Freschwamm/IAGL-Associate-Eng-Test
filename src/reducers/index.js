import { FETCH_TODOS, ADD_TODO } from "../actions/types";

export default function(state = { data: []}, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {...state, data: action.payload };
    case ADD_TODO:
      return {...state, data: action.payload};
    default:
      return state;
  }
}