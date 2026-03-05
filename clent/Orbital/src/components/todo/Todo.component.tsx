import React, { useState } from 'react';
import './Todo.styles.css';
import type { Todo } from './Todo.type';
import { initialTasks } from '../../data/dashboard.data';

const TaskComponent: React.FC = () => {
    const [tasks, setTasks] = useState<Todo[]>(initialTasks);
    const [selectedTask, setSelectedTask] = useState<Todo | null>(null);
    const [isCalendarModalOpen, setCalendarModalOpen] = useState(false);

    // Form State
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [newTaskDate, setNewTaskDate] = useState("");
    const [newTaskType, setNewTaskType] = useState<'task' | 'event'>('task');

    // Mocks a 30-day month for the calendar grid
    const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

    const handleCreateTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTaskTitle || !newTaskDate) return alert("Select a date and enter a title!");

        const newTask: Todo = {
            id: Date.now(),
            title: newTaskTitle,
            date: `2023-11-${newTaskDate.padStart(2, '0')}`, // Mocking format
            time: "12:00 PM",
            description: "No description provided.",
            type: newTaskType
        };

        setTasks([newTask, ...tasks]);
        setCalendarModalOpen(false);
        setNewTaskTitle("");
        setNewTaskDate("");
    };

    return (
        <div className="task-module">
            <div className="dashboard-header">
                <h2>Schedule & Tasks</h2>
                <button className="btn-primary" onClick={() => setCalendarModalOpen(true)}>+ New Todo</button>
            </div>

            {/* Task List */}
            <div className="task-grid">
                {tasks.map(task => (
                    <div key={task.id} className="task-card" onClick={() => setSelectedTask(task)}>
                        <div className={`task-badge ${task.type}`}>{task.type}</div>
                        <h4>{task.title}</h4>
                        <div className="task-meta">{task.date} at {task.time}</div>
                    </div>
                ))}
            </div>

            {/* Huge Offcanvas for Task Details */}
            <div className={`offcanvas-backdrop ${selectedTask ? 'show' : ''}`} onClick={() => setSelectedTask(null)}>
                <div className={`offcanvas-panel ${selectedTask ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
                    {selectedTask && (
                        <>
                            <button className="btn-close-offcanvas" onClick={() => setSelectedTask(null)}>✕ Close</button>
                            <span className={`task-badge ${selectedTask.type}`}>{selectedTask.type.toUpperCase()}</span>
                            <h2>{selectedTask.title}</h2>
                            <div className="offcanvas-meta">
                                📅 {selectedTask.date} | ⏰ {selectedTask.time}
                            </div>
                            <div className="offcanvas-desc">
                                <h3>Description</h3>
                                <p>{selectedTask.description}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Big Modal with Calendar for New Task */}
            {isCalendarModalOpen && (
                <div className="modal-overlay">
                    <div className="calendar-modal-content">
                        <h2>Plan a New Task/Event</h2>
                        <form onSubmit={handleCreateTask} className="calendar-layout">

                            {/* Left Side: The Calendar Grid */}
                            <div className="calendar-grid-container">
                                <h3>Select Date (Nov 2023)</h3>
                                <div className="calendar-grid">
                                    {daysInMonth.map(day => (
                                        <div
                                            key={day}
                                            className={`calendar-day ${newTaskDate === day.toString() ? 'selected' : ''}`}
                                            onClick={() => setNewTaskDate(day.toString())}
                                        >
                                            {day}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Form Details */}
                            <div className="calendar-form-container">
                                <label>Title</label>
                                <input type="text" value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} placeholder="E.g., Doctor Appointment" />

                                <label>Type</label>
                                <select value={newTaskType} onChange={e => setNewTaskType(e.target.value as 'task' | 'event')}>
                                    <option value="task">Task</option>
                                    <option value="event">Event</option>
                                </select>

                                <div className="modal-actions">
                                    <button type="button" className="btn-cancel" onClick={() => setCalendarModalOpen(false)}>Cancel</button>
                                    <button type="submit" className="btn-primary">Save Task</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskComponent;