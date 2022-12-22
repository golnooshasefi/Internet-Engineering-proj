import React, { useState } from "react";

import Register from "./Register.js";
import Login from "./Login.js";

function App() {
  const { currentForm, setCurrentForm } = useState("login");
  return (
    <div className="App">
      {currentForm === "login" ? <Login /> : <Register />}
    </div>
  );
}

export default App;
