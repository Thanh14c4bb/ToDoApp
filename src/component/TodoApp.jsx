
import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskCompleted from './TaskCompleted';

const ToDoApp = () => {
  const [list, setList] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const onChangeList = (event) => {
    setList(event.target.value);
  };

  const onAddList = () => {
    if (list.trim() !== "") {
      setTasks([...tasks, { text: list, completed: false }]);
      setList("");
    }
  };

  const onDeleteList = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const onDeleteAll = () => {
    setTasks([]);
  };

  const onComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const filterTasks = () => {
    switch (filter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  const filteredTasks = filterTasks();

  return (
    <div>
      <h1>#Todo</h1>

      <div className='task'>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <TaskInput value={list} onChange={onChangeList} onAdd={onAddList} />

      

      {filter === "all" && (
        <TaskList tasks={filteredTasks} onComplete={onComplete} />
      )}

      {filter === "active" && (
        <TaskList tasks={filteredTasks} onComplete={onComplete} />
      )}

      {filter === "completed" && (
        <TaskCompleted
          tasks={filteredTasks}
          onDeleteList={onDeleteList}
          onDeleteAll={onDeleteAll}
        />
      )}
    </div>
  );
};

export default ToDoApp;
