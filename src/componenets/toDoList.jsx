import React from 'react';
import { useState } from 'react';
const Task = () => {
  const [taskList, setTaskList] = useState({
    title: '',
    priority: '',
    status: '',
  });
  // console.log(taskList, 'taskdata');
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    setTaskList((prev) => [
      { ...prev, title: title, priority: priority, status: status },
    ]);
  };

  return (
    <>
      <div>Task</div>
      <form className="task" onSubmit={addTask}>
        <label name="title">Title</label>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label name="priority">priority</label>
        <input
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />

        <label name="status">status</label>
        <input
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button>Button</button>
      </form>

      <div>
        {taskList?.map((item, index) => {
          return (
            <>
              <div>{item.title}</div>
              <div>{item.priority}</div>
              <div>{item.status}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Task;
