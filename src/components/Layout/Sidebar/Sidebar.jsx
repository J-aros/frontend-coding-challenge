import classes from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <aside className={classes.sidenav}>
      <h2 className={classes.sidenav__logo}>
        <FontAwesomeIcon className={classes.sidenav__icon} icon={faCode} />
        BeFlow
      </h2>
      <SidebarLinks />
    </aside>
  );
};

export default Sidebar;
