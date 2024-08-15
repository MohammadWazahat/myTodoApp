import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddTodo from "./addTodo/AddTodo";
import UpdateTodo from "./updateTodo/UpdateTodo";
import ReadSingleTodo from "./home/ReadSingleTodo";
import TestRedux from "./TestRedux/TestRedux";
import Home from "./home/Home";

const MyApp = () => {
  const route = createBrowserRouter([
    {
      path: "/form",
      element: <AddTodo />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/updateForm/:id",
      element: <UpdateTodo />,
    },
    {
      path: "/read/:id",
      element: <ReadSingleTodo />,
    },
    {
      path: "/testRedux",
      element: <TestRedux />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default MyApp;
