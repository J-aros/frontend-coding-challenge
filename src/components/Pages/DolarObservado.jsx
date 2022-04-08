import useFinancialIndicators from "../../hooks/index";
import FinancialIndicator from "../FinancialIndicator/FinancialIndicator";

const DolarObservado = () => {
  const { dolarObservadoData } = useFinancialIndicators();
  return (
    <FinancialIndicator
      codigo={dolarObservadoData.codigo}
      nombre={dolarObservadoData.nombre}
      valor={dolarObservadoData.valor}
      unidad_medida={dolarObservadoData.unidad_medida}
      fecha={dolarObservadoData.fecha}
    />
  );
};

export default DolarObservado;
