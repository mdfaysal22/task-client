import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { MdSubdirectoryArrowLeft } from "react-icons/md";

const SingleCompleted = ({ task, refetch }) => {
  const [commentStatus, setCommentStatus] = useState(false);
  const { _id, title, image } = task;
  const handleDelete = (id) => {
    fetch(`https://task-server-main.vercel.app/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  const handleCompleted = (id) => {
    fetch(`https://task-server-main.vercel.app/tasks/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const handleShow = () => {
    setCommentStatus(!commentStatus);
  };

  
  
  return (
    <div className="w-full dark:bg-sky-500 dark:text-white bg-sky-100 rounded-md  my-5 ">
      <div className=" flex w-full p-3 justify-between items-center">
        <div className="flex justify-start gap-3 items-center">
          <img className="w-12 h-12 rounded-md" src={image} alt="" />
          <h2>{title}</h2>
        </div>

        <div className="flex justify-end gap-3">
            <button>See Comment</button>
          <button
            onClick={handleShow}
            className="text-xl  p-2 rounded-md hover:text-sky-900"
          >
            <GoComment></GoComment>
          </button>
          <button
            onClick={() => {
              handleCompleted(_id);
            }}
            className="text-xl p-2 rounded-md hover:text-sky-900"
          >
            <MdSubdirectoryArrowLeft></MdSubdirectoryArrowLeft>
          </button>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="text-2xl  p-2 rounded-md hover:text-red-600 duration-500"
          >
            <AiOutlineDelete></AiOutlineDelete>
          </button>
        </div>
      </div>

      {commentStatus && (
        <div className="p-3 mt-5">
          <form className="flex justify-center items-start gap-3 ">
            <textarea
              name="comment"
              type="text"
              placeholder="Task Description"
              className="w-full dark:bg-sky-300 dark:border-sky-300 placeholder:text-black  dark:text-black  bg-gray-50 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
            />

            <button
              type="submit"
              className=" bg-sky-600 dark:bg-sky-600 hover:bg-sky-500 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              comment
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SingleCompleted;
