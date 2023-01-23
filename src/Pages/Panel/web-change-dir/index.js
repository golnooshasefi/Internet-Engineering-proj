import classes from "./Webchangedir.module.scss";
import { Divider, Typography } from "@mui/material";
import axiosInstance from "../../../axios";
import { useState } from "react";

function Webchangedir() {
    return (
        <Typography variant="h4" noWrap component="div">
            Web Server Change Directory
        </Typography>
    );
}

export default Webchangedir;