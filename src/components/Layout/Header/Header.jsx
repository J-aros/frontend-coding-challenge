import classes from "./Header.module.css";
import avatar from "../../../assets/avatar.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <input
        className={classes.header__search}
        type="search"
        placeholder="Buscar"
      />
      <div className={classes.header__name}>
        <img className={classes.header__avatar} src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
