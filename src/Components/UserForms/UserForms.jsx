import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleData, addData, updateData, cancelEdit } from "../../redux/actions";

const UserForms = () => {
  const dispatch = useDispatch();
  const { userInfo, btnState } = useSelector((state) => state);
  const isFormValid =
    userInfo.name && userInfo.email && userInfo.age && userInfo.phone;

  return (
    <div>
      <div className="form">
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={userInfo.name}
          onChange={(e) =>
            dispatch(handleData(e.target.name, e.target.value))
          }
        />
        <br />
        <input
          type="number"
          placeholder="Enter Your age"
          name="age"
          value={userInfo.age}
          onChange={(e) =>
            dispatch(handleData(e.target.name, e.target.value))
          }
        />
        <br />
        <input
          type="email"
          placeholder="Enter Your email"
          name="email"
          value={userInfo.email}
          onChange={(e) =>
            dispatch(handleData(e.target.name, e.target.value))
          }
        />
        <br />
        <input
          type="number"
          placeholder="Enter Your number"
          name="phone"
          value={userInfo.phone}
          onChange={(e) =>
            dispatch(handleData(e.target.name, e.target.value))
          }
        />
        <br />
        {btnState === "add" ? (
          <button onClick={() => dispatch(addData())} disabled={!isFormValid}>
            Add
          </button>
        ) : (
          <div className="btn-container">
            <button onClick={() => dispatch(updateData())}>Update</button>
            <button onClick={() => dispatch(cancelEdit())}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForms;
