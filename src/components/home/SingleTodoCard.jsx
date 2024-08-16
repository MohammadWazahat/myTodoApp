import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleTodoCard = (user) => {
  
  const [mode, setMode] = useState(true);
  // console.log(mode)
  // console.log(user);
  return (
    <div className={mode ? `` : `bg-lime-400 text-gray-800 `}>
      <div className="bdr flex gap-4 w-full">
        <div className="bdr fc">mark done </div>
        <button
          className=""
          onClick={() => setMode(!mode)}
        >
          markd
        </button>
        <div className="bdr flex flex-col justify-between items-center p-2 gap-4 rounded w-full">
          <div className="flex gap-4 ">
            <Link className="" to={`/read/` + user.id}>
              <div className="text-xl hover:text-orange-400">{user.title}</div>
            </Link>
          </div>
          <div className="bdr flex gap-4 w-full justify-between">
            <div>{user.group}</div>
            <div>{user.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTodoCard;
