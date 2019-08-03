export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

// Action 객체를 만드는 일
export const addTodo = text => ({
  type: ADD_TODO,
  text,
});

export const completeTodo = index => ({
  type: COMPLETE_TODO,
  index,
});
