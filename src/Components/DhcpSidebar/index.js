import * as React from "react";
import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import DnsIcon from "@mui/icons-material/Dns";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import LogoutIcon from "@mui/icons-material/Logout";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import { Avatar, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

import classes from "../Shared/Sidebar.module.scss";
import { UserContext } from "../../store/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

const drawerWidth = 280;
function Dhcpsidebar() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { user, logout } = context;

  function logouthandler() {
    console.log("before logout")
    console.log(axiosInstance.defaults.headers.common["Authorization"])
    logout();
    console.log("after logout")
    console.log(axiosInstance.defaults.headers.common["Authorization"])
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

        <Link to="dhcp-config" className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              DHCP Config
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="dhcp-ip" className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              Change Ip Range
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
  );
}

export default Dhcpsidebar;
