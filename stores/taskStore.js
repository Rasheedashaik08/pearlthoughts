// stores/taskStore.js
import create from 'zustand';
import axios from 'axios';

const useTaskStore = create((set) => ({
  tasks: [],
  fetchTasks: async () => {
    const response = await axios.get('http://localhost:3001/tasks');
    set({ tasks: response.data });
  },
  addTask: async (task) => {
    const response = await axios.post('http://localhost:3001/tasks', task);
    set((state) => ({ tasks: [...state.tasks, response.data] }));
  },
}));

export default useTaskStore;
