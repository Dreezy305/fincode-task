import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./constant";
import axios from "axios";

// FETCH USER START ACTION
const fetchUserStart = () => ({
  type: FETCH_USERS_START,
});

// FETCH USER SUCCESS ACTION
const fetchUsersSuccess = (data) => ({
  type: FETCH_USERS_SUCCESS,
  payload: data,
});

// FETCH USER FAILURE ACTION
const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

//  FETCH USER THUNK
const fetchUsers = () => (dispatch) => {
  const uri = "https://jsonplaceholder.typicode.com/users";
  dispatch(fetchUserStart());
  axios
    .get(uri)
    .then((response) => dispatch(fetchUsersSuccess(response.data)))
    .catch((error) => dispatch(fetchUsersFailure(error)));
};

// DEFAULT STATE FOR PROVIDERS
const InitialState = {
  isLoading: false,
  data: [],
};

const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case FETCH_USERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export { fetchUsers, UserReducer };
