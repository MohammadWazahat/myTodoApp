const reducer = (state, action) => {
//   console.log(state);
//   console.log(action.payload);
  if (action.type === "SET_LOADING") {
    // console.log(action.payload)
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === "SET_MY_DATA") {
    // console.log(action.payload);
    // console.log(action.payload);
    //       const newData = action.payload.map((item) => {
    //   return item.group;
    // });
    // console.log(newData);

    // // to merge all array in one
    // const x = newData.flat();
    // //   console.log(x)
    // const Y = [...new Set(x)];
    // console.log(Y);
    return {
      ...state,
      myData: action.payload,
      myButtons :  action.payload,
    //    myButtons :  Y,
      // productsByBrand: action.payload,
      isLoading: false,
      isError: false,
    };
  }

  if (action.type === "SET_ERROR") {
    // console.log(action.payload)
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }

  if (action.type === "ASCENDING") {
    console.log(action.payload);
    const sorted = action.payload.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    return { ...state, myData: sorted };
  }

  if (action.type === "DESCENDING") {
    const sorted = action.payload.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
    return { ...state, myData: sorted };
  }

  if (action.type === "LOWEST") {
    const sorted = action.payload.sort((a, b) => {
      return a.date.localeCompare(b.date);
    });
    return { ...state, myData: sorted };
  }

  if (action.type === "HIGHEST") {
    const sorted = action.payload.sort((a, b) => {
      return b.date.localeCompare(a.date);
    });
    return { ...state, myData: sorted };
  }

  // for filtering data
  if (action.type === "FILTER_BY_GROUP") {
    // console.log(action.payload.pay1)
    const brands = action.payload.pay1.filter(
      (data) => data.group === action.payload.pay2.group
    );
    // console.log(brands);
    return { ...state, myData: brands };
  }

  if (action.type === "ALL_PRODUCTS") {
    return { ...state, myData: action.payload.pay1 };
  }
  if (action.type === "ALL_GROUPS") {
    const newData = action.payload.pay1.map((item) => {
      return item.group;
    });
    console.log(newData);
    return { ...state, myButtons : newData };
  }

  return state;
};

export default reducer;
