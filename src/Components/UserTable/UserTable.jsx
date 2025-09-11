import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startEdit, deleteData } from "../../redux/actions";

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  return (
    <div>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={() => dispatch(startEdit(user))}>
                      Edit
                    </button>
                    <button onClick={() => dispatch(deleteData(user.id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" style={{ textAlign: "center" }}>
                  No users available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
