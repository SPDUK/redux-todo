import React from 'react';

export default props => {
  const { currentTodo, changeCurrent } = props;
  const handleInputChange = e => {
    const val = e.target.value;
    // changeCurrent comes from index.js
    // changeCurrent will take the val from event.target.value
    // and dispatch the payload to the todo reducer
    // will return a currentTodo state, which is used as the value
    changeCurrent(val);
  };
  return (
    <form action="">
      <input type="text" onChange={handleInputChange} value={currentTodo} />
    </form>
  );
};
