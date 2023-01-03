import React, { useState } from "react";
import { Users } from "./Users";

const Random = () => {
    const [query, setQuery] = useState("");
    const search = (e) => {
        setQuery(e.target.value);
    }
    const handleQuery = (users) => {
        return users.filter( user => user.first_name.toLowerCase().includes(query) || user.last_name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query))
    }

    
  return (
    <div>
      <div className="w-full md:w-1/2 mx-auto">
        <input
          className="p-3 w-full border-2 focus:border-sky-900 rounded-md dark:border-0 dark:bg-sky-900 dark:text-white dark:placeholder:text-white"
          type="text"
          placeholder="Search..."
          onChange={search}
        />
      </div>
      <div className="py-3">
        {handleQuery(Users).map((user) => (
          <ul key={user.id} className="flex bg-gray-200 p-3 rounded-md dark:bg-sky-400 dark:border-0 justify-around my-2 items-center gap-4 border-2">
            <li>{user.first_name}</li>
            <li>{user.last_name}</li>
            <li>{user.email}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Random;
