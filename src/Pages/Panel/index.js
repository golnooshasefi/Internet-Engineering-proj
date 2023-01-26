import Box from "@mui/material/Box";

import Adminsidebar from "../../Components/AdminSidebar";
import Dhcpsidebar from "../../Components/DhcpSidebar";
import Mailsidebar from "../../Components/MailSidebar";
import Websidebar from "../../Components/WebSidebar";

import { UserContext } from "../../store/UserContext";

import { Outlet } from "react-router-dom";
import { useContext } from "react";

function Panel() {
  const context = useContext(UserContext);
  const { user } = context;
  console.log(user);
  // return (
  //   <>
  //     <Box sx={{ display: "flex" }}>
  //       <Dhcpsidebar />
  //       <Box
  //         component="main"
  //         sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
  //       >
  //         <Outlet />
  //       </Box>
  //     </Box>
  //   </>
  // );
  if (user.type === "mail") {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <Mailsidebar />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Outlet />
          </Box>
        </Box>
      </>
    );
  }
  if (user.type === "dhcp") {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <Dhcpsidebar />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Outlet />
          </Box>
        </Box>
      </>
    );
  }
  if (user.type === "web") {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <Websidebar />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Outlet />
          </Box>
        </Box>
      </>
    );
  }
  if (user.type === "admin") {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <Adminsidebar />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Outlet />
          </Box>
        </Box>
      </>
    );
  }
}

export default Panel;
