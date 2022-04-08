import useFinancialIndicators from "../../hooks/index";
import FinancialIndicator from "../FinancialIndicator/FinancialIndicator";

const DolarAcuerdo = () => {
  const { dolarAcuerdoData } = useFinancialIndicators();

  return (
    <FinancialIndicator
      codigo={dolarAcuerdoData.codigo}
      nombre={dolarAcuerdoData.nombre}
      valor={dolarAcuerdoData.valor}
      unidad_medida={dolarAcuerdoData.unidad_medida}
      fecha={dolarAcuerdoData.fecha}
    />
  );
};

export default DolarAcuerdo;
