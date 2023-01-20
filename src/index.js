import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
// import UserContext from "../../store/UserContext";
import { UserContextProvider } from "./store/UserContext";
const router = createBrowserRouter(routes);

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    {/* <UserContextProvider> */}
    <RouterProvider router={router} />
    {/* </UserContextProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
