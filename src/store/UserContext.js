import { createContext, useEffect, useState } from "react";

import axiosInstance from "../axios";

const UserContext = createContext({
  type: "",
  username: "",
  email: "",
  auth: false,
});

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    type: "",
    username: "",
    email: "",
    auth: false,
  });

  const login = (type, username, email = "") => {
    setUser({
      type: type,
      username: username,
      email: email,
      auth: true,
    });
    localStorage.setItem(
      "userInformation",
      JSON.stringify({
        type: type,
        username: username,
        // email: email,
        auth: true,
      })
    );
  };

  const updateName = (username = user.username) => {
    setUser((prev) => ({ ...prev, username }));
    localStorage.removeItem("userInformation");
    localStorage.setItem("userInformation", JSON.stringify(user));
  };

  // const checkLogin = () => {
  //   if (localStorage.getItem("access_token") !== null) {
  //     console.log("test");
  //     axiosInstance
  //       .post(`accounts/api/token/verify/`, {
  //         token: localStorage.getItem("access_token"),
  //       })
  //       .then((res) => {
  //         console.log("res" + res);
  //         if (res.status === 200) {
  //           console.log(res);
  //           console.log(localStorage.getItem("userInformation"));
  //           setUser(JSON.parse(localStorage.getItem("userInformation")));
  //         } else {
  //           console.log("logout checklogin");
  //           logout();
  //         }
  //       });
  //   }
  // };
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("userInformation");
    setUser({
      type: "",
      username: "",
      email: "",
      auth: false,
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateName }}>
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserContextProvider };
