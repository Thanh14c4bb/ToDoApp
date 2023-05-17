

import React from 'react';
import { FaMobileAlt } from "react-icons/fa";

const TaskCompleted = ({ tasks, onDeleteList, onDeleteAll }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="list-item">
            <input type="checkbox" checked={task.completed} onChange={() => onDeleteList(index)} />
            <span style={{ textDecoration: 'line-through' }}>{task.text}</span>
            <button id='delete' onClick={() => onDeleteList(index)}>
               <FaMobileAlt/> </button>
          </li>
        ))}
      </ul>
      <button id='deleteAll' onClick={onDeleteAll}><FaMobileAlt/> Delete All</button>
    </div>
  );
};

export default TaskCompleted;

