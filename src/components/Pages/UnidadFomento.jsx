import useFinancialIndicators from "../../hooks/index";
import FinancialIndicator from "../FinancialIndicator/FinancialIndicator";

const UnidadFomento = () => {
  const { unidadFomentoData } = useFinancialIndicators();
  return (
    <FinancialIndicator
      codigo={unidadFomentoData.codigo}
      nombre={unidadFomentoData.nombre}
      valor={unidadFomentoData.valor}
      unidad_medida={unidadFomentoData.unidad_medida}
      fecha={unidadFomentoData.fecha}
    />
  );
};

export default UnidadFomento;
