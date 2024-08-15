import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./GetJsonData.css";
import SingleTodoCard from "./SingleTodoCard";

const GetTodo = () => {
  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3030/users");
      setMyUser(res.data);
    };
    fetchData();
  }, []);

  // console.log(myUser);

  return (
    <div>
      <section className="mt-24">
        <div className="flex justify-between mx-4">
          <div className="text-3xl flex justify-center items-center">
            Todo List
          </div>
          <div className=" flex justify-end ">
            <Link className="border-2 border-slate-200 hover:border-orange-400 p-3 btnOne rounded-3xl text-gray-900 font-medium" to="/form">
              Add New Todo
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div>
          <div className=" grid grid-cols-1 mx-4 gap-4 ">
            {myUser.map((user, index) => {
              return (
                <div className="" key={index}>
                  <SingleTodoCard {...user} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetTodo;
