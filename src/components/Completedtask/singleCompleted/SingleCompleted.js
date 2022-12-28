import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { RxUpdate} from 'react-icons/rx';
import { MdSubdirectoryArrowLeft } from 'react-icons/md';

const SingleCompleted = ({task}) => {
    const {name, photo} = task;
    return (
        <div className='w-full flex bg-sky-100 rounded-md justify-between items-center my-5 p-3'>
            <div>
                <img className='w-12 h-12 rounded-md' src={photo} alt="" />
            </div>
            <h2>{name}</h2>
            <div className='flex justify-end gap-3'>
            <button className='text-xl  p-2 rounded-md hover:text-sky-900'><RxUpdate></RxUpdate></button>
            <button className='text-xl p-2 rounded-md hover:text-sky-900'><MdSubdirectoryArrowLeft></MdSubdirectoryArrowLeft></button>
            <button className='text-2xl  p-2 rounded-md hover:text-red-600 duration-500'><AiOutlineDelete></AiOutlineDelete></button>
            </div>
        </div>
    );
};

export default SingleCompleted;