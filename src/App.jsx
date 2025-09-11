import React from "react";
import UserTable from "./Components/UserTable/UserTable";
import UserForms from "./Components/UserForms/UserForms";
import './App.css'

const App = () => {
  return (
    <div className="container">
      <UserForms />
      <UserTable />
    </div>
  );
};

export default App;
