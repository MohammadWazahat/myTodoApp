import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const SingleTodoCard = (user) => {
  const [mode, setMode] = useState(true);
  // console.log(mode)
  // console.log(user);
  return (
    <div>
      <div className="flex gap-2 ">
        <button className="" onClick={() => setMode(!mode)}>
          <IoCheckmarkDoneCircleOutline className="h-8 w-8" />
        </button>
        <div
          className={
            mode ? `w-full` : `border-2 border-green-500 text-gray-800 w-full `
          }
        >
          <div className="bdr flex flex-col justify-between items-center p-2 gap-4 rounded w-full">
            <div className="flex gap-4 ">
              <Link className="" to={`/read/` + user.id}>
                <div className="text-xl hover:text-orange-400">
                  {user.title}
                </div>
              </Link>
            </div>
            <div className="flex gap-4 w-full justify-between">
              <div>{user.group}</div>
              <div>{user.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTodoCard;
