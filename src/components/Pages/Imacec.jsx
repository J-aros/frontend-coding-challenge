import useFinancialIndicators from "../../hooks/index";
import FinancialIndicator from "../FinancialIndicator/FinancialIndicator";

const Imacec = () => {
  const { imacecData } = useFinancialIndicators();
  return (
    <FinancialIndicator
      codigo={imacecData.codigo}
      nombre={imacecData.nombre}
      valor={imacecData.valor}
      unidad_medida={imacecData.unidad_medida}
      fecha={imacecData.fecha}
    />
  );
};

export default Imacec;
