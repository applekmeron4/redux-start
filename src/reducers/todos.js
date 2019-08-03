import { ADD_TODO, COMPLETE_TODO } from '../Actions';

const todos = (prevState, action) => {
  if (prevState === undefined) {
    return []; // intialize value
  }

  if (action.type === ADD_TODO) {
    return [...prevState, { text: action.text, completed: false }];
  }

  if (action.type === COMPLETE_TODO) {
    return prevState.map((state, index) =>
      index === action.index ? { ...state, completed: true } : { ...state },
    );
  }

  return prevState;
};

export default todos;
