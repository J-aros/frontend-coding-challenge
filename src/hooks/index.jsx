import { useContext } from "react";
import { ContextFinancialIndicators } from "./useFinancialIndicators";

const useFinancialIndicators = () => {
  const {
    dolarAcuerdoData,
    imacecData,
    dolarObservadoData,
    bitcoinData,
    unidadTributariaMensualData,
    libraDeCobreData,
    euroData,
    tasaDeDesempleoData,
    unidadFomentoData,
    setDolarAcuerdoData,
    setUnidadTributariaMensualData,
    setDolarObservadoData,
    setEuroData,
    setTasaDeDesempleoData,
    setImacecData,
    setLibraDeCobreData,
    setUnidadFomentoData,
    setBitcoinData,
  } = useContext(ContextFinancialIndicators);
  return {
    dolarAcuerdoData,
    imacecData,
    dolarObservadoData,
    bitcoinData,
    unidadTributariaMensualData,
    libraDeCobreData,
    euroData,
    tasaDeDesempleoData,
    unidadFomentoData,
    setDolarAcuerdoData,
    setUnidadTributariaMensualData,
    setDolarObservadoData,
    setEuroData,
    setTasaDeDesempleoData,
    setImacecData,
    setLibraDeCobreData,
    setUnidadFomentoData,
    setBitcoinData,
  };
};

export default useFinancialIndicators;
