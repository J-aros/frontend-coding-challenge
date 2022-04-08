import FinancialIndicator from "../FinancialIndicator/FinancialIndicator";
import useFinancialIndicators from "../../hooks/index";

const Bitcoin = () => {
  const { bitcoinData } = useFinancialIndicators();

  return (
    <FinancialIndicator
      codigo={bitcoinData.codigo}
      nombre={bitcoinData.nombre}
      valor={bitcoinData.valor}
      unidad_medida={bitcoinData.unidad_medida}
      fecha={bitcoinData.fecha}
    />
  );
};

export default Bitcoin;
