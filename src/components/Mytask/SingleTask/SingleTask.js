import React from 'react';
import {AiOutlineDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import { BiCheckCircle } from 'react-icons/bi';
const SingleTask = ({task, refetch}) => {
    const {_id,title, description, image} = task;
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            refetch();
        })
    }

    const handleCompleted = (id) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'completeBTN': true,
              
              }
        })
        .then(res => res.json())
        .then(data => {
            refetch();
        });
    }
    return (
        <div className='w-full dark:bg-sky-600 dark:text-white flex bg-sky-100 rounded-md justify-between items-center my-5 p-3'>
            <div className='flex justify-start items-center gap-3'>
                <img className='w-12 h-12 rounded-md' src={image} alt="" />
                <h2>{title}</h2>
            </div>
            
            <div className='flex justify-end gap-3'>
            <button className='text-xl  p-2 rounded-md hover:text-sky-900'><FiEdit></FiEdit></button>
            <button onClick={() => {handleCompleted(_id)}} className='text-2xl p-2 rounded-md hover:text-sky-900'><BiCheckCircle></BiCheckCircle></button>
            <button onClick={() => {handleDelete(_id)}} className='text-2xl  p-2 rounded-md hover:text-red-600 duration-500'><AiOutlineDelete></AiOutlineDelete></button>
            </div>
        </div>
    );
};

export default SingleTask;