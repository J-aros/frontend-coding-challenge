import useFinancialIndicators from "../../hooks/index";
import FinancialIndicator from "../FinancialIndicator/FinancialIndicator";

const UnidadTributariaMensual = () => {
  const { unidadTributariaMensualData } = useFinancialIndicators();
  return (
    <FinancialIndicator
      codigo={unidadTributariaMensualData.codigo}
      nombre={unidadTributariaMensualData.nombre}
      valor={unidadTributariaMensualData.valor}
      unidad_medida={unidadTributariaMensualData.unidad_medida}
      fecha={unidadTributariaMensualData.fecha}
    />
  );
};

export default UnidadTributariaMensual;
