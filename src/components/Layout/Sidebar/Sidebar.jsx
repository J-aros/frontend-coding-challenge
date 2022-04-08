import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <aside className={classes.sidenav}>
      <h2 className={classes.sidenav__logo}>
        <FontAwesomeIcon className={classes.sidenav__icon} icon={faCode} />
        BeFlow
      </h2>

      <ul className={classes.sidenav__list}>
        <li className={classes.sidenav__list_item}>Libra de Cobre</li>
        <li className={classes.sidenav__list_item}>Tasa de Desempleo</li>
        <li className={classes.sidenav__list_item}>IMACEC</li>
        <li className={classes.sidenav__list_item}>Euro / CLP</li>
        <li className={classes.sidenav__list_item}>Dólar observado</li>
        <li className={classes.sidenav__list_item}>Dólar acuerdo</li>
        <li className={classes.sidenav__list_item}>Unidad de Fomento</li>
        <li className={classes.sidenav__list_item}>
          Unidad Tributaria Mensual
        </li>
        <li className={classes.sidenav__list_item}>Bitcoin</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
