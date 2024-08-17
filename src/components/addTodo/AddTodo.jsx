import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const AddTodo = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    group: "",
    date: "",
  });

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post("http://localhost:3030/users", values)
      .then((res) => {
        console.log(res);
        // hook to navigate back to the page
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <section className="mt-8">
        <div>
          <div className="h-20 text-3xl flex justify-center items-center">
            Add New Todo Details
          </div>
          <div className=" flex justify-end m-4 ">
            <Link
              className="border-2 border-slate-200 hover:border-orange-400 p-3 btnOne rounded text-gray-900 font-medium "
              to="/"
            >
              Todo List
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="border-2 border-gray-200 hover:border-green-400 m-4 p-2 bg-gray-200">
          <form onSubmit={submitForm}>
            <div className="flex p-2">
              <input
                className="border border-gray-200 m-2 p-2 px-4 w-full rounded hover:border-green-400"
                type="text"
                placeholder="Add Title"
                name="title"
                onChange={(e) =>
                  setValues({ ...values, title: e.target.value })
                }
              />
            </div>
            <div className="flex p-2">
              <input
                className="border border-gray-200 m-2 p-2 px-4 w-full rounded hover:border-green-400 h-32"
                type="text"
                placeholder="Add Description"
                name="description"
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
              />
            </div>

            <div className="flex p-2">
              <input
                className="border border-gray-200 m-2 p-2 px-4 w-full rounded hover:border-green-400"
                type="text"
                placeholder="Add Group"
                name="group"
                onChange={(e) =>
                  setValues({ ...values, group: e.target.value })
                }
              />
            </div>
            <div className="flex p-2">
              <input
                className="border border-gray-200 m-2 p-2 px-4 w-full rounded hover:border-green-400"
                type="date"
                id="date"
                name="date"
                onChange={(e) => setValues({ ...values, date: e.target.value })}
              />
            </div>
            <div className=" m-2 p-2 flex justify-center items-center">
              <button
                className="border-2 border-slate-200 hover:border-orange-400 p-2 btnTwo rounded-full text-gray-900 font-medium w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddTodo;
