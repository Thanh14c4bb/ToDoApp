
import React from 'react';
import { FaMobileAlt } from "react-icons/fa";

const TaskList = ({ tasks, onDeleteList, onComplete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="list-item">
          <input type="checkbox" checked={task.completed} 
          onChange={() => onComplete(index)} />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}</span>
          {onDeleteList && <button 
          onClick={() => onDeleteList(index)}> 
          FaMobileAlt Delete</button>}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;