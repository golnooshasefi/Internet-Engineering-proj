import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DnsIcon from "@mui/icons-material/Dns";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import { AppBar, Avatar, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

import classes from "../Shared/Sidebar.module.scss";
import { Link } from "react-router-dom";

const drawerWidth = 260;
function Websidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        fontSize: "1.7rem",
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          User panel
        </Typography>
      </Toolbar>
      <Divider />
      <div className={classes["user-info"]}>
        {/* <img src="./images/user1.png" className={classes.userImage} /> */}

        <div className={classes["user-info__description"]}>
          <div className={classes.info}>
            <Avatar
              sx={{ m: 2, bgcolor: teal[500] }}
              className={classes.container__form_Avatar}
            ></Avatar>
            <div className={classes["user-info__title"]}>Golnoosh Asefi</div>
          </div>
        </div>
      </div>

      <Divider />

      <Divider />
      <List>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DnsIcon sx={{ fontSize: 20 }} />
            </ListItemIcon>
            Recieve your log
          </ListItemButton>
        </ListItem>

        <Link to="web-config" className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon sx={{ fontSize: 20 }} />
              </ListItemIcon>
              Web Server Config
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="web-change-dir" className={classes.link}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BuildIcon sx={{ fontSize: 20 }} />
              </ListItemIcon>
              Change Home Directory
            </ListItemButton>
          </ListItem>
        </Link>
        {/* ))} */}
      </List>
      
    </Drawer>
  );
}

export default Websidebar;
