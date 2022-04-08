import useFinancialIndicators from "../../hooks/index";
import FinancialIndicator from "../FinancialIndicator/FinancialIndicator";

const TasaDeDesempleo = () => {
  const { tasaDeDesempleoData } = useFinancialIndicators();
  return (
    <FinancialIndicator
      codigo={tasaDeDesempleoData.codigo}
      nombre={tasaDeDesempleoData.nombre}
      valor={tasaDeDesempleoData.valor}
      unidad_medida={tasaDeDesempleoData.unidad_medida}
      fecha={tasaDeDesempleoData.fecha}
    />
  );
};

export default TasaDeDesempleo;
