import classes from "./Container.module.css";

const Container = (props) => {
  return <div className={classes.grid__container}>{props.children}</div>;
};

export default Container;
