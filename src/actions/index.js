import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export function getData(date) {
  console.log("In getData in actions and date is:",date);
  return function(dispatch) {
    console.log("In anon function in actions and dateString is:",date);
    dispatch({type:FETCH_START, payload:date});
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(res => {
        console.log("This is data from server:",res.data);
        const nasaData = {
          title: res.data.title,
          explanation: res.data.explanation,
          hdurl: res.data.hdurl,
        }
        dispatch({type:FETCH_SUCCESS,payload1:nasaData,payload2:date});
      })
      .catch(err => {
        console.log(err.response);
        dispatch({type:FETCH_FAILURE, payload:date});
      })

  };
}