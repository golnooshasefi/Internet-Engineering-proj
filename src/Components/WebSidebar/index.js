import * as React from "react";

import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import DnsIcon from "@mui/icons-material/Dns";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import BuildIcon from "@mui/icons-material/Build";
import { Avatar, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

import classes from "../Shared/Sidebar.module.scss";
import { UserContext } from "../../store/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 280;
function Websidebar() {
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

        <Link to="web-config" className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              Web Server Config
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="web-change-dir" className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FolderOpenIcon />
              </ListItemIcon>
              Change Home Directory
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="create-email" className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MarkEmailReadIcon />
              </ListItemIcon>
              Create your email account
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem disablePadding>
          <ListItemButton onClickCapture={logouthandler}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            Logout
          </ListItemButton>
        </ListItem>
        {/* ))} */}
      </List>
    </Drawer>
    // </Box>
  );
}

export default Websidebar;
