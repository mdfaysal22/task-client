import React from 'react';
import SingleCompleted from './singleCompleted/SingleCompleted';

const Completedtask = () => {
    const tasks = [
        {id: '_1', name: "Hand writen", description: "This is the first task", photo: "https://cdn-icons-png.flaticon.com/512/906/906334.png"},
        {id: '_2', name: "Hand writen", description: "This is the second task", photo: "https://img.freepik.com/premium-vector/task-mark-note-book-logo-design-icon-symbol_171487-1571.jpg?w=2000"}
    ]
    return (
        <div>
            <h1 className='text-sky-500 text-3xl font-semibold'>Completed Tasks</h1>
            {
                tasks.map(task => <SingleCompleted key={task.id} task = {task}></SingleCompleted>)
            }
        </div>
    );
};

export default Completedtask;