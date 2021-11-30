const initState = { period: "daily" };

const periodReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_PERIOD":
      return {
        ...state,
        period: action.payload.period,
      };
    default:
      return { ...state };
  }
};

export default periodReducer;
