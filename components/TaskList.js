// components/TaskList.js
import TaskItem from './TaskItem';
import useTaskStore from '../stores/taskStore';
import { useEffect } from 'react';

const TaskList = () => {
  const { tasks, fetchTasks } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
