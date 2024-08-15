import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionTypeOneFirstSlice,
  actionTypeTwoFirstSlice,
} from "../../redux/features/firstSlice/firstSlice";
import {
  actionTypeOnesecondSlice,
  actionTypeTwosecondSlice,
} from "../../redux/features/secondSlice/secondSlice";

const TestRedux = () => {
  const dispatch = useDispatch();
  console.log(dispatch);

  const firstValue = useSelector((state) => state.storeSliceOne.value);
  console.log(firstValue);

  const secondValue = useSelector((state) => state.storeSliceTwo.value);
  console.log(secondValue);

  return (
    <div>
      <div>{firstValue}</div>
      <div>{secondValue}</div>
      <button onClick={() => dispatch(actionTypeOneFirstSlice("Add Me"))}>
        actionTypeOneFirstSlice
      </button>
      <button onClick={() => dispatch(actionTypeTwoFirstSlice("Add Me"))}>
        actionTypeTwoFirstSlic
      </button>
      <button onClick={() => dispatch(actionTypeOnesecondSlice("Add Me"))}>
        actionTypeOnesecondSlice
      </button>
      <button onClick={() => dispatch(actionTypeTwosecondSlice("Add Me"))}>
        actionTypeTwosecondSlice
      </button>
    </div>
  );
};

export default TestRedux;
