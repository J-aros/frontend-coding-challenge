import useFinancialIndicators from "../../hooks/index";
import FinancialIndicator from "../FinancialIndicator/FinancialIndicator";

const Euro = () => {
  const { euroData } = useFinancialIndicators();
  return (
    <FinancialIndicator
      codigo={euroData.codigo}
      nombre={euroData.nombre}
      valor={euroData.valor}
      unidad_medida={euroData.unidad_medida}
      fecha={euroData.fecha}
    />
  );
};

export default Euro;
