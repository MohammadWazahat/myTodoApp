import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ReadSingleTodo = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/` + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("would you like to delete the user");
    if (confirm) {
      axios
        .delete(`http://localhost:3030/users/` + id)
        .then((res) => {
          // location.reload();
          navigate("/"); // reload us to the same page
        })
        .catch((err) => console.log(err));
    }
    console.log(id);
  };
  return (
    <div>
      <section className="mt-24 ">
        <div className="flex justify-end m-4 ">
          <Link
            className="border-2 border-slate-200 hover:border-orange-400 p-3 btnOne rounded-3xl text-gray-900 font-medium "
            to="/"
          >
            Todo List
          </Link>
        </div>
      </section>
      <section className="mt-12">
        <div className="bdr mx-2 p-2 flex flex-col gap-4">
          <div className=" flex justify-end items-center text-orange-400 font-semibold ">{data.group}</div>
          <div className="text-3xl">{data.title}</div>
          <div className="text-xl">{data.description}</div>

          <div className="mt-12 flex justify-between">
            <div className="flex justify-center items-center ">
              Added By :
              <span className="ml-2 text-xl text-green-400 flex justify-center items-center ">
                {data.date}
              </span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div>
                <Link
                  className="fc"
                  to={`/updateForm/` + data.id}
                >
                  <FaEdit className="h-8 w-8 "/>
                </Link>
              </div>
              <div className="fc mt-1">
                <button className="" onClick={(e) => handleDelete(data.id)}>
                <MdDelete className="h-8 w-8 " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadSingleTodo;
