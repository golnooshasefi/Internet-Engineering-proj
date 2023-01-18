import React, { useState } from "react";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Panel from "./Pages/Panel";
// import Sidebar from "./Pages/Panel/Sidebar";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {/* {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}
      {/* <Panel /> */}
      <Panel />
    </div>
  );
}

export default App;
