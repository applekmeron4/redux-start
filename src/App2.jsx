import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import { addTodo } from './Actions';

const App = props => {
  const { todos, filter, add } = props;

  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(todos)}</p>
        <p>{JSON.stringify(filter)}</p>
        <button
          onClick={() => {
            add('Hello');
          }}
        />
      </header>
    </div>
  );
};

const mapStateToProps = state => ({ todos: state.todos, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  add: text => {
    dispatch(addTodo(text));
  },
});

const AppContainer = connect(
  mapStateToProps, // State(store) => props(App)
  mapDispatchToProps,
)(App);

//Store => state => AppContainer{App}
export default AppContainer;
