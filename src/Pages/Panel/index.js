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
import { Divider } from "@mui/material";

function Panel() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Dhcpsidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          {/* <Divider /> */}
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default Panel;
