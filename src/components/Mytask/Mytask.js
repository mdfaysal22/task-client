import React from 'react';
import SingleTask from './SingleTask/SingleTask';

const Mytask = () => {
    const tasks = [
        {id: '_1', name: "Hand writen", description: "This is the first task", photo: "https://cdn-icons-png.flaticon.com/512/906/906334.png"},
        {id: '_2', name: "Hand writen", description: "This is the second task", photo: "https://img.freepik.com/premium-vector/task-mark-note-book-logo-design-icon-symbol_171487-1571.jpg?w=2000"}
    ]
    return (
        <div>
            <h1 className='text-3xl font-semibold text-sky-500'>My Tasks</h1>
            {
                tasks.map(task => <SingleTask key={task.id} task={task}></SingleTask>)
            }
        </div>
    );
};

export default Mytask;