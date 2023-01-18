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
import { AppBar, Avatar, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

import classes from "../Shared/Sidebar.module.scss";

const drawerWidth = 240;
function Mailsidebar() {
  return (
    <Box sx={{ display: "flex" }}>
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
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
        <Divider />
        <div className={classes["seller-info"]}>
          {/* <img src="./images/user1.png" className={classes.userImage} /> */}

          <div className={classes["seller-info__description"]}>
            <div className={classes.info}>
              <Avatar
                sx={{ m: 1, bgcolor: teal[500] }}
                className={classes.container__form_Avatar}
              ></Avatar>
              <div className={classes["seller-info__title"]}>
                Golnoosh Asefi
              </div>
            </div>
          </div>
        </div>

        <Divider />

        <Divider />
        <List>
          {/* {["All mail", "Trash", "Spam"].map((text, index) => ( */}
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DnsIcon />
              </ListItemIcon>
              Recieve your log
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              Mail Config
            </ListItemButton>
          </ListItem>

          {/* ))} */}
        </List>
      </Drawer>
    </Box>
  );
}

export default Mailsidebar;
