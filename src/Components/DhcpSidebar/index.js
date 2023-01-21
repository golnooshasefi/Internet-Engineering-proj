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
import { Avatar, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

import classes from "../Shared/Sidebar.module.scss";
import UserContext from "../../store/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const drawerWidth = 260;
function Dhcpsidebar() {
  const user = useContext(UserContext);

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
            {/* <div className={classes["user-info__title"]}>{user.username}</div> */}
            <div className={classes["user-info__title"]}>Golnoosh</div>
          </div>
        </div>
      </div>

      <Divider />

      <Divider />
      <List>
        {/* {["All mail", "Trash", "Spam"].map((text, index) => ( */}
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
        {/* ))} */}
      </List>
    </Drawer>
    // </Box>
  );
}

export default Dhcpsidebar;
