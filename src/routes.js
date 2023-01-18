export const routes = [
  // { path: "/", element: <Homepage /> },
  {
    path: "/dhcp-panel",
    element: <Panel />,
    children: [
      { path: "/dhcp-panel/log", element: <Favorites /> },
      { path: "/dhcp-panel/dhcp-config", element: <UserOrders /> },
      { path: "/user-panel/dhcpIP", element: <UserPersonalInfo /> },
      {
        path: "/user-panel/additional-questions",
        element: <AdditionalQuestion />,
      },
    ],
  },
];
