import { useState } from 'react';
import Task from './components/Task';
import './App.css'

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ name: '', dueDate: '' });

    const handleTaskSubmit = () => {
        if (newTask.name && newTask.dueDate) {
            setTasks([...tasks, { ...newTask, id: Date.now() }]);
            setNewTask({ name: '', dueDate: '' });
        }
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const handleDeleteAll = () => {
        setTasks([]); // Delete all tasks by setting the tasks array to an empty array
    };

    return (
        <div className="app container">
            <h1>Task Management App</h1>
            <div className='input'>
            <div className="input-content">
                <label htmlFor="Task Name">Task Name</label>
                  <input
                    type="text"
                    placeholder="Task Name"
                    value={newTask.name}
                    onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                />
              </div>
                <div className="input-content">
                  <label htmlFor="Task Name">Task Name</label>
                  <input
                      type="text"
                      placeholder="Due Date"
                      value={newTask.dueDate}
                      onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  />
                </div>
                <div className="btn">
                <button onClick={handleTaskSubmit}>Add Task</button>
                <button onClick={handleDeleteAll}>Delete All</button>
                </div>
            </div>
            <div className="task-list">
                {tasks.length === 0 ? (
                    <p>No tasks yet. Add some tasks!</p>
                ) : (
                    tasks.map((task) => (
                        <Task key={task.id} task={task} onDelete={handleDeleteTask} />
                    ))
                )}
            </div>
        </div>
    );
}

export default App;