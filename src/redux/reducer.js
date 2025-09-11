import { v4 as uuid } from "uuid";
import {
  HANDLE_DATA,
  ADD_DATA,
  DELETE_DATA,
  START_EDIT,
  CANCEL_EDIT,
  UPDATE_DATA
} from "./actionTypes";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  userInfo: {
    id: uuid(),
    name: "",
    email: "",
    age: "",
    phone: ""
  },
  btnState: "add"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_DATA:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          [action.payload.name]: action.payload.value
        }
      };

    case ADD_DATA: {
      const updatedUsers = [...state.users, state.userInfo];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers,
        userInfo: { id: uuid(), name: "", email: "", age: "", phone: "" }
      };
    }

    case DELETE_DATA: {
      const updatedUsers = state.users.filter((u) => u.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers
      };
    }

    case START_EDIT:
      return {
        ...state,
        userInfo: action.payload,
        btnState: "edit"
      };

    case CANCEL_EDIT:
      return {
        ...state,
        userInfo: action.payload,
        btnState: "add"
      };

    case UPDATE_DATA: {
      const updatedUsers = state.users.map((user) =>
        user.id === state.userInfo.id ? state.userInfo : user
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers,
        userInfo: { id: uuid(), name: "", email: "", age: "", phone: "" },
        btnState: "add"
      };
    }

    default:
      return state;
  }
};

export default reducer;
