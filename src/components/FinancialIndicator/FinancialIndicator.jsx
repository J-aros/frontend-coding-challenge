import classes from "./FinancialIndicator.module.css";
import moment from "moment";

const FinancialIndicator = (props) => {
  const formatDate = moment(props.fecha).utc().format("DD/MM/YYYY");
  return (
    <div className={classes.main_card}>
      <div className={classes.card}>
        <p>
          <span>Código:</span> {props.codigo}
        </p>
        <p>
          <span>Nombre:</span> {props.nombre}
        </p>
        <p>
          <span>Valor:</span> ${props.valor}
        </p>
        <p>
          <span>Unidad de Medida:</span> {props.unidad_medida}
        </p>
        <p>
          <span>Fecha:</span> {formatDate}
        </p>
      </div>
    </div>
  );
};

export default FinancialIndicator;
