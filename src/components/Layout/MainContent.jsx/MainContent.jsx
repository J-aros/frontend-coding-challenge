import classes from "./MainContent.module.css";

const MainContent = (props) => {
  return <div className={classes.main__content}>{props.children}</div>;
};

export default MainContent;
