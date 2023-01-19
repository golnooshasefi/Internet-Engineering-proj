import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { common } from "@mui/material/colors";
import { teal } from "@mui/material/colors";
// import DeleteIcon from "@mui/icons-material";
import Adminsidebar from "../../Components/AdminSidebar";
import Dhcpsidebar from "../../Components/DhcpSidebar";
import Mailsidebar from "../../Components/MailSidebar";
import Websidebar from "../../Components/WebSidebar";

import classes from "./Panel.module.scss";
import { Outlet } from "react-router-dom";
import { Button } from "@mui/material";

const drawerWidth = 240;

function Panel() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          {/* <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar> */}
        </AppBar>
        {/* <Adminsidebar /> */}
        <Dhcpsidebar />
        {/* <Mailsidebar /> */}
        {/* <Websidebar /> */}
      </Box>
      <Outlet />
    </>
  );
}

export default Panel;
