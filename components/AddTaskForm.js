// components/AddTaskForm.js
import { useState } from 'react';
import useTaskStore from '../stores/taskStore';

const AddTaskForm = () => {
  const { addTask } = useTaskStore();
  const [task, setTask] = useState({ title: '', description: '', due_date: '', recurrence: {} });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: '', description: '', due_date: '', recurrence: {} });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} placeholder="Task Title" required />
      <textarea value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} placeholder="Description" />
      <input type="date" value={task.due_date} onChange={(e) => setTask({ ...task, due_date: e.target.value })} />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
