import useFinancialIndicators from "../../hooks/index";
import FinancialIndicator from "../FinancialIndicator/FinancialIndicator";

const LibraDeCobre = () => {
  const { libraDeCobreData } = useFinancialIndicators();
  return (
    <FinancialIndicator
      codigo={libraDeCobreData.codigo}
      nombre={libraDeCobreData.nombre}
      valor={libraDeCobreData.valor}
      unidad_medida={libraDeCobreData.unidad_medida}
      fecha={libraDeCobreData.fecha}
    />
  );
};

export default LibraDeCobre;
