import classes from "./Banner.module.css";


const Banner = () => {
  return (
    <div className={classes.main}>
      <div className={classes.main__header}>
        <div className={classes.banner__title}>Bievenido</div>
        <p className={classes.banner__content}>Estos son los principales indicadores económicos</p>
      </div>
    </div>
  );
};

export default Banner;
