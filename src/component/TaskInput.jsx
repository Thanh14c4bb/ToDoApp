
import React, { useState } from 'react';

const TaskInput = ({ value, onChange, onAdd }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onAdd();
    }
  };
  
  return (
    <div className='button-add'>
      <input value={value} 
      placeholder="Add details"
      id='input'
      onChange={onChange}  type="text" />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default TaskInput;
