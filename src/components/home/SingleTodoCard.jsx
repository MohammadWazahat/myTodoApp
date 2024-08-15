import React from "react";
import { Link } from "react-router-dom";

const SingleTodoCard = (user) => {
  console.log(user);
  return (
    <div className="">
      <div className="bdr flex items-center p-2 gap-4 rounded ">
        <div className="">mark done </div>
        <Link className="" to={`/read/` + user.id}>
          <div className="text-xl hover:text-orange-400">{user.title}</div>
        </Link>
      </div>
    </div>
  );
};

export default SingleTodoCard;
