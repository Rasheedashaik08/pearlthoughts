// components/TaskItem.js
const TaskItem = ({ task }) => (
  <div className="p-4 border rounded mb-2">
    <h2>{task.title}</h2>
    <p>{task.description}</p>
    <p>Due Date: {task.due_date}</p>
  </div>
);

export default TaskItem;
