import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./GetJsonData.css";
import SingleTodoCard from "./SingleTodoCard";
import reducer from "./GetTodoReducer";

const GetTodo = () => {
  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const res = await axios.get("http://localhost:3030/users");
        // console.log(res.data);
        setMyUser(res.data);
        const products = await res.data;
        dispatch({
          type: "SET_MY_DATA",
          payload: products,
        });
      } catch (err) {
        dispatch({ type: "SET_ERROR" });
        setMyUser(null);
      }
    };
    fetchData();
  }, []);

  // console.log(myUser);

  const initialState = {
    myData: myUser,
    isLoading: false,
    isError: false,
    myButtons: [],
    // productsByBrand: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state.myData)


  const SortAsc = () => {
    // console.log("i m clicked");
    dispatch({
      type: "ASCENDING",
      payload: state.myData,
    });
  };

  const SortDesc = () => {
    // console.log("i m clicked");
    dispatch({
      type: "DESCENDING",
      payload: state.myData,
    });
  };

  const SortLowest = () => {
    // console.log("i m clicked");
    dispatch({
      type: "LOWEST",
      payload: state.myData,
    });
  };

  const SortHighest = () => {
    // console.log("i m clicked");
    dispatch({
      type: "HIGHEST",
      payload: state.myData,
    });
  };


  const FilterByGroup = (x) => {
    console.log(x);
    dispatch({
      type: "FILTER_BY_GROUP",
      payload: {
        pay1: initialState.myData,
        pay2: x,
      },
    });
  };

  const AllProducts = () => {
    // console.log("i m clicked");
    dispatch({
      type: "ALL_PRODUCTS",
      payload: {
        pay1: initialState.myData,
      },
    });
  };

  const AllGroups = () => {
    // console.log("i m clicked");
    dispatch({
      type: "ALL_GROUPS",
      payload: {
        pay1: state.myButtons,
      },
    });
  };
  AllGroups

    // //for filtering data
    const newData = state.myButtons.map((item) => {
      console.log(item.group)
      return item.group;
    });
    console.log(newData);


    // // to merge all array in one
    // const x = newData.flat();
    // //   console.log(x)
    // const Y = [...new Set(x)];
    // console.log(Y);
    // const [arr, setArr] = useState(Y);
    // console.log(arr);
  return (
    <div>
      <section className="mt-24">
        <div className="flex justify-between mx-4">
          <div className="text-3xl flex justify-center items-center">
            Todo List
          </div>
          <div className=" flex justify-end ">
            <Link
              className="border-2 border-slate-200 hover:border-orange-400 p-3 btnOne rounded-3xl text-gray-900 font-medium"
              to="/form"
            >
              Add New Todo
            </Link>
          </div>
        </div>
      </section>
      <div>{newData}</div>
      <section>
      <button className="bdr" onClick={()=>AllGroups()}>
             All goupss
              </button>
      </section>
      <section>
        {
          state.myButtons.map((item,index)=>{
            // console.log(item)
            return <div key={index}>
              {/* <button className="bdr" onClick={()=>filterByGroup(item)}> */}
              <button className="bdr" onClick={()=>FilterByGroup(item)}>
              
              {item.group }
              </button>
            </div>
          })
        }
      </section>
      <section>
      <button className="bdr" onClick={()=>AllProducts()}>
             All products
              </button>
      </section>
      <section>
        <div className="flex gap-4">
          <button className="btnThree p-2 m-2" onClick={() => SortAsc()}>
            Sort By Title A to Z
          </button>
          <button className="btnThree p-2 m-2" onClick={() => SortDesc()}>
            Sort By Title Z to A
          </button>
          <button className="btnThree p-2 m-2" onClick={() => SortLowest()}>
            Oldest
          </button>
          <button className="btnThree p-2 m-2" onClick={() => SortHighest()}>
            Newest
          </button>
        </div>
      </section>

      <section className="mt-12">
        <div className="">
          <div className=" grid grid-cols-1 mx-4 gap-4 ">
            {state.myData.map((user, index) => {
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
