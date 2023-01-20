import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Panel from "./Pages/Panel";
import Dhcpconfig from "./Pages/Panel/Dhcp-config";
import Iprange from "./Pages/Panel/IPrange";

import Mailconfig from "./Pages/Panel/Mailconfig";

import Webconfig from "./Pages/Panel/Web-config";


export const routes = [
  // { path: "/", element: <Homepage /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  {
    path: "panel",
    element: <Panel />,
    children: [
      // { path: "/dhcp-panel/log", element: <Favorites /> },
      { path: "dhcp-config", element: <Dhcpconfig /> },
      { path: "dhcp-ip", element: <Iprange /> },

      { path: "mail-config", element: <Mailconfig /> },

      { path: "web-config", element: <Webconfig /> },

    ],
  },
];
