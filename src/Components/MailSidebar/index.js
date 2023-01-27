import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import MailIcon from "@mui/icons-material/Mail";
import DnsIcon from "@mui/icons-material/Dns";
import LogoutIcon from "@mui/icons-material/Logout";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import { AppBar, Avatar, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

import classes from "../Shared/Sidebar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";

const drawerWidth = 280;
function Mailsidebar() {
  const context = useContext(UserContext);
  const { user, logout } = context;
  const navigate = useNavigate();

  function logouthandler() {
    logout();
    navigate("/");
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        // fontSize: "1.7rem",
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar className={classes.tool}>
        <Typography variant="h6" noWrap component="div">
          User panel
        </Typography>
      </Toolbar>
      <Divider />
      <div className={classes["user-info"]}>
        <div className={classes["user-info__description"]}>
          <div className={classes.info}>
            <Avatar
              sx={{ bgcolor: teal[500] }}
              className={classes.container__form_Avatar}
            ></Avatar>
            <div className={classes["user-info__title"]}>{user.username}</div>
          </div>
        </div>
      </div>

      <Divider />

      <Divider />
      <List>
        <Link to="logs" className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DnsIcon />
              </ListItemIcon>
              Recieve your log
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="mail-config" className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              Mail Config
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MarkEmailReadIcon />
            </ListItemIcon>
            Create your email account
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClickCapture={logouthandler}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            Logout
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
    // </Box>
  );
}

export default Mailsidebar;
