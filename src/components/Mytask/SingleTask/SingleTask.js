import React from 'react';
import {AiOutlineDelete} from 'react-icons/ai'
import {GrCompliance} from 'react-icons/gr'
import {FiEdit} from 'react-icons/fi'
const SingleTask = ({task}) => {
    const {name, description, photo} = task;
    // console.log(img)
    return (
        <div className='w-full flex bg-sky-100 rounded-md justify-between items-center my-5 p-3'>
            <div>
                <img className='w-12 h-12 rounded-md' src={photo} alt="" />
            </div>
            <h2>{name}</h2>
            <div className='flex justify-end gap-3'>
            <button className='text-xl  p-2 rounded-md hover:text-sky-900'><FiEdit></FiEdit></button>
            <button className='text-xl p-2 rounded-md hover:text-sky-900'><GrCompliance></GrCompliance></button>
            <button className='text-2xl  p-2 rounded-md hover:text-red-600 duration-500'><AiOutlineDelete></AiOutlineDelete></button>
            </div>
        </div>
    );
};

export default SingleTask;