import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Panel from "./Pages/Panel";
import Dhcpconfig from "./Pages/Panel/Dhcp-config";
import Iprange from "./Pages/Panel/IPrange";

export const routes = [
  // { path: "/", element: <Homepage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  {
    path: "/dhcp-panel",
    element: <Panel />,
    children: [
      // { path: "/dhcp-panel/log", element: <Favorites /> },
      { path: "/dhcp-config", element: <Dhcpconfig /> },
      { path: "/dhcpIP", element: <Iprange /> },
    ],
  },
];
