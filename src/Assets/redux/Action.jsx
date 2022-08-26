import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const Loading = () => ({ type: LOADING });
export const Success = (payload) => ({ type: SUCCESS, payload });
export const Error = () => ({ type: ERROR });

export const fetchAllData = (dispatch, query, display) => {

  return function () {

    dispatch(Loading());
    axios
      .get(`https://mock8-server.herokuapp.com/${query}?title=${display}`)

      .then((res) => {

        const { data } = res.data[0];

        setTimeout(() => {
          dispatch(Success(data));  
        }, 500);
      })
      
      .catch((err) => {
        dispatch(Error());
        console.log(err);
      });
  };
};
