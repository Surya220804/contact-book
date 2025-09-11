import { v4 as uuid } from "uuid";
import {
  HANDLE_DATA,
  ADD_DATA,
  DELETE_DATA,
  START_EDIT,
  CANCEL_EDIT,
  UPDATE_DATA
} from "./actionTypes";

export const handleData = (name, value) => ({
  type: HANDLE_DATA,
  payload: { name, value }
});

export const addData = () => ({
  type: ADD_DATA
});

export const deleteData = (id) => ({
  type: DELETE_DATA,
  payload: id
});

export const startEdit = (user) => ({
  type: START_EDIT,
  payload: user
});

export const cancelEdit = () => ({
  type: CANCEL_EDIT,
  payload: {
    id: uuid(),
    name: "",
    email: "",
    age: "",
    phone: ""
  }
});

export const updateData = () => ({
  type: UPDATE_DATA
});
