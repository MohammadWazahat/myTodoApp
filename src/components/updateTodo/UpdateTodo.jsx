import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateTodo = () => {
  const { id } = useParams();
  // Create api
  const users = {
    title: "",
    description: "",
    group: "",
    date: "",
  };

  const [user, setUser] = useState(users);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3030/users/` + id, user);
    navigate("/");
  };

  useEffect(() => {
    axios.get(`http://localhost:3030/users/` + id).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  return (
    <div className="fc">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <section className="mt-8">
          <div>
            <div className="h-20 text-3xl flex justify-center items-center">
              Edit Your Todo
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
          <div className="border-2 bg-gray-200 border-gray-200 hover:border-green-400 m-4 p-2 ">
            <form onSubmit={submitForm}>
              <div className="flex p-2">
                <input
                  className="border border-gray-200 m-2 p-2 px-4 w-full rounded hover:border-green-400"
                  type="text"
                  placeholder="Add Title"
                  name="title"
                  value={user.title}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="flex p-2">
                <input
                  className="border border-gray-200 m-2 p-2 px-4 w-full rounded hover:border-green-400 h-32"
                  type="text"
                  placeholder="Add Description"
                  name="description"
                  value={user.description}
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="flex p-2">
                <input
                  className="border border-gray-200 m-2 p-2 px-4 w-full rounded hover:border-green-400"
                  type="text"
                  placeholder="Add Group"
                  name="group"
                  value={user.group}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="flex p-2">
                <input
                  className="border border-gray-200 m-2 p-2 px-4 w-full rounded hover:border-green-400"
                  type="date"
                  id="date"
                  name="date"
                  value={user.date}
                  onChange={inputChangeHandler}
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
    </div>
  );
};

export default UpdateTodo;
