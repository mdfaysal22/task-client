import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import './Modal.css';

const Modal = () => {
    const [modal, setModal] = useState(false);
    const handleModal = () => {
      
        setModal(!modal);
        if(modal) {
            document.body.classList.add('auto-hidden');
        }
        else {
            document.body.classList.remove('auto-hidden');
    }}
  return (
    <div>
      <div className="text-center">
        <button onClick={handleModal} className="bg-sky-600 text-white px-4 rounded-sm py-2 cursor-pointer">
          Open Modal
        </button>
      </div>
      {
        modal && 
        <div className="modal">
        <div className="modal-overlay ">
            <div className="bg-sky-600 modal-content text-white font-mono">
                <div className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Modal Content</h1>
                <button onClick={handleModal} className=" text-4xl"><AiFillCloseSquare className="hover:text-sky-200"></AiFillCloseSquare></button>
                </div>
                <p className="text-xs my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, a amet. Iure eligendi illo voluptates culpa, maxime a! Nostrum, asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur, fuga assumenda voluptatem animi, quam labore tempora nesciunt facilis et perferendis quis in iure voluptas maxime. Iste odio dolor maxime?</p>
            </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Modal;
