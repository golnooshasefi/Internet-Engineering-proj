import classes from "./Panel.module.scss";
// import MainNavigation from "../../components/layout/MainNavigation";
import Sidebar from "./Sidebar";

// import { Outlet } from "react-router-dom";

function UserPanel() {
  return (
    <>
      {/* <MainNavigation /> */}
      <div className={classes.SellerPanel}>
        <div className={classes.SellerPanel__container}>
          <Sidebar />
          {/* <Outlet /> */}
        </div>
      </div>
    </>
  );
}

export default UserPanel;
