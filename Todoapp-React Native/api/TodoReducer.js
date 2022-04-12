function TodoReducer(state, action) {
  if (action.type === "ADD") {
    const date = new Date();
    const todo = { text: action.payload, time: date.toLocaleTimeString() };
    return [todo, ...state];
  } else if (action.type === "DELETE") {
    const newState = state.filter((obj, index) => index != action.payload);
    return newState;
  }
  return state;
}

export default TodoReducer;
