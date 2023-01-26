import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Panel from "./Pages/Panel";
import Dhcpconfig from "./Pages/Panel/Dhcp-config";
import Iprange from "./Pages/Panel/IPrange";

import HeroSection from "./Pages/HeroSection";
import Logs from "./Pages/Panel/Logs";
import Mailconfig from "./Pages/Panel/Mailconfig";
import Webconfig from "./Pages/Panel/Web-config";

import Webchangedir from "./Pages/Panel/web-change-dir";
import CreateEmail from "./Pages/Panel/Create-email";

export const routes = [
  // { path: "/", element: <Homepage /> },
  { path: "/", element: <HeroSection /> },

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
      { path: "logs", element: <Logs /> },

      { path: "web-config", element: <Webconfig /> },
      { path: "web-change-dir", element: <Webchangedir /> },
      { path: "create-email", element: <CreateEmail /> },
    ],
  },
];
