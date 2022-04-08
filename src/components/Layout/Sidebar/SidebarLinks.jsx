import classes from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const SidebarLinks = () => {
  return (
    <ul className={classes.sidenav__list}>
      <li className={classes.sidenav__list_item}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? classes.sidenav__list_item_active
              : classes.sidenav__list_item
          }
        >
          Libra de Cobre
        </NavLink>
      </li>
      <li className={classes.sidenav__list_item}>
        <NavLink
          to={"/tasadesempleo"}
          className={({ isActive }) =>
            isActive
              ? classes.sidenav__list_item_active
              : classes.sidenav__list_item
          }
        >
          Tasa de Desempleo
        </NavLink>
      </li>
      <li className={classes.sidenav__list_item}>
        {" "}
        <NavLink
          to={"/imacec"}
          className={({ isActive }) =>
            isActive
              ? classes.sidenav__list_item_active
              : classes.sidenav__list_item
          }
        >
          IMACEC
        </NavLink>
      </li>
      <li className={classes.sidenav__list_item}>
        {" "}
        <NavLink
          to={"/euro"}
          className={({ isActive }) =>
            isActive
              ? classes.sidenav__list_item_active
              : classes.sidenav__list_item
          }
        >
          Euro
        </NavLink>
      </li>
      <li className={classes.sidenav__list_item}>
        {" "}
        <NavLink
          to={"/dolarobservado"}
          className={({ isActive }) =>
            isActive
              ? classes.sidenav__list_item_active
              : classes.sidenav__list_item
          }
        >
          Dólar observado
        </NavLink>
      </li>
      <li className={classes.sidenav__list_item}>
        {" "}
        <NavLink
          to={"/dolaracuerdo"}
          className={({ isActive }) =>
            isActive
              ? classes.sidenav__list_item_active
              : classes.sidenav__list_item
          }
        >
          Dólar acuerdo
        </NavLink>
      </li>
      <li className={classes.sidenav__list_item}>
        {" "}
        <NavLink
          to={"/unidadfomento"}
          className={({ isActive }) =>
            isActive
              ? classes.sidenav__list_item_active
              : classes.sidenav__list_item
          }
        >
          Unidad de Fomento
        </NavLink>
      </li>
      <li className={classes.sidenav__list_item}>
        <NavLink
          to={"/unidadtributariamensual"}
          className={({ isActive }) =>
            isActive
              ? classes.sidenav__list_item_active
              : classes.sidenav__list_item
          }
        >
          UTM
        </NavLink>
      </li>
      <li className={classes.sidenav__list_item}>
        <NavLink
          to={"/bitcoin"}
          className={({ isActive }) =>
            isActive
              ? classes.sidenav__list_item_active
              : classes.sidenav__list_item
          }
        >
          Bitcoin
        </NavLink>
      </li>
    </ul>
  );
};

export default SidebarLinks;
