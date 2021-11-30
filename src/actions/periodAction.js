export const changePeriod = (period) => (dispatch) => {
  dispatch({
    type: "SET_PERIOD",
    payload: {
      period: period,
    },
  });
};
