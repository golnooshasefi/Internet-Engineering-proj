import React, { useState } from "react";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Panel from "./Pages/Panel";
import Dhcpconfig from "./Pages/Panel/Dhcp-config";
import Iprange from "./Pages/Panel/IPrange";
// import Sidebar from "./Pages/Panel/Sidebar";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    // <Routes>
    //   {routes.map((route) => (
    //     <Route path={route.path} element={route.element}>
    //       {route?.children &&
    //         route.children.map((childrenRoute) => <Route {...childrenRoute} />)}
    //     </Route>
    //   ))}
    // </Routes>
    <div className="App">
      {/* {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}
      {/* <Panel /> */}
      {/* <Iprange /> */}
    </div>
  );
}

export default App;
