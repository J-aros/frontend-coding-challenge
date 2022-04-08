import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.sidenav}>
      <ul className={classes.sidenav__list}>
        <li className={classes.sidenav__list_item}>Indicadores</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
