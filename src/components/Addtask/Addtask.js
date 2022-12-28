import React from "react";

const Addtask = () => {
  return (
    <div>
      <form class="w-full border rounded-lg mx-auto">
        <h1 className="text-center font-semibold text-3xl mt-5">Add Your New Task</h1>
        <div class="flex flex-col gap-4 p-4 md:p-8">
          <div>
            <input
              name="text"
              placeholder="Task Title"
              type="text"
              class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <div>
            
            <textarea
              name="password"
              type="text"
              placeholder="Task Description"
              class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>
          <div>
            
          <label
                        className="flex w-full cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                        tabIndex="0">
                        <span htmlFor="photo-dropbox" className="flex items-center space-x-2">
                            <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                                <path
                                    d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"></path>
                                <path
                                    d="M80,128a80,80,0,1,1,144,48"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"></path>
                                <polyline
                                    points="118.1 161.9 152 128 185.9 161.9"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"></polyline>
                                <line
                                    x1="152"
                                    y1="208"
                                    x2="152"
                                    y2="128"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"></line>
                            </svg>
                            <span className="text-xs font-medium text-gray-600">
                                Drop Your Task Image, or
                                <span className="text-blue-600 underline ml-1">browse</span>
                            </span>
                        </span>
                        <input  id="photo-dropbox" type="file" className="sr-only" />
                    </label>
          </div>

          <button class="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
            Add Task
          </button>

          </div>

        
      </form>
    </div>
  );
};

export default Addtask;
