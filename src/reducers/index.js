import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from '../actions';

//This is a test initialState. 
// const initialState = {
//   nasaData: {
//     title: "Messier 45: The Daughters of Atlas and Pleione",
//     explanation: "Hurtling through a cosmic dust cloud a mere 400 light-years away, the lovely Pleiades or Seven Sisters open star cluster is well-known for its striking blue reflection nebulae.",
//     hdurl: "https://apod.nasa.gov/apod/image/1911/m45astrograph.jpg"
//   },
//   error: false,
//   isFetching: false,
//   date: "2019-11-07",
// };

//This is the final initialState to use for final app
const initialState = {
  nasaData: {
    title: "",
    explanation: "",
    hdurl: ""
  },
  error: false,
  isFetching: false,
  date: "",
};

//This is a test initialState.  Check error message display
// const initialState = {
//   nasaData: {
//     title: "",
//     explanation: "",
//     hdurl: ""
//   },
//   error: true,
//   isFetching: false,
//   date: "2019-11-07",
// };

//This is a test initialState.  Check fetching data message display
// const initialState = {
//   nasaData: {
//     title: "",
//     explanation: "",
//     hdurl: ""
//   },
//   error: false,
//   isFetching: true,
//   date: "2019-11-07",
// };

function reducer(state=initialState,action) {
  // console.log("In reducer and actions is:",action);
  // console.log("In reducer and initialState is:",initialState);
  switch(action.type) {
    case FETCH_START: {
      // console.log("In reducer and action.payload is:",action.payload);
      const newState = {
        ...state,
        isFetching: true,
        date: action.payload,
      } 
      // console.log("In FETCH_START & newState is:",newState);
      return newState;
    }
    
    case FETCH_SUCCESS: {
      const newState = {
        nasaData: action.payload1,
        error: false,
        isFetching: false,
        date: action.payload2,
      } 
      return newState;
    }

    case FETCH_FAILURE: {
      const newState = {
        nasaData: {
          title: "",
          explanation: "",
          hdurl: ""
        },
        error: true,
        isFetching: false,
        date: action.payload,
      } 
      return newState;
    }


    default:
      return state;
  }
}

export default reducer;