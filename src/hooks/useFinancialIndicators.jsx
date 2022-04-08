import React, { useState, useCallback } from "react";

export const ContextFinancialIndicators = React.createContext({
  bitcoinData: [],
  dolarAcuerdoData: [],
  dolarObservadoData: [],
  unidadTributariaMensualData: [],
  euroData: [],
  setEuroData: [],
  imacecData: [],
  libraDeCobreData: [],
  tasaDeDesempleoData: [],
  unidadFomentoData: [],
  setBitcoinData: () => {},
  setImacecData: () => {},
  setLibraDeCobreData: () => {},
  setTasaDeDesempleoData: () => {},
  setDolarAcuerdoData: () => {},
  setUnidadFomentoData: () => {},
  setDolarObservadoData: () => {},
  setUnidadTributariaMensualData: () => {},
});

const ContextFinancialIndicatorsProvider = ({ children }) => {
  const [bitcoinData, saveBitcoinData] = useState([]);
  const [dolarAcuerdoData, saveDolarAcuerdoData] = useState([]);
  const [dolarObservadoData, saveDolarObservadoData] = useState([]);
  const [unidadTributariaMensualData, saveUnidadTributariaMensualData] =
    useState([]);
  const [euroData, saveEuroData] = useState([]);
  const [imacecData, saveImacecData] = useState([]);
  const [libraDeCobreData, saveLibraDeCobreData] = useState([]);
  const [tasaDeDesempleoData, saveTasaDeDesempleoData] = useState([]);
  const [unidadFomentoData, saveUnidadFomentoData] = useState([]);

  const setBitcoinData = (array) => saveBitcoinData(array);
  const setDolarAcuerdoData = (array) => saveDolarAcuerdoData(array);
  const setDolarObservadoData = (array) => saveDolarObservadoData(array);
  const setUnidadTributariaMensualData = (array) =>
    saveUnidadTributariaMensualData(array);
  const setEuroData = (array) => saveEuroData(array);
  const setImacecData = (array) => saveImacecData(array);
  const setLibraDeCobreData = (array) => saveLibraDeCobreData(array);
  const setTasaDeDesempleoData = (array) => saveTasaDeDesempleoData(array);
  const setUnidadFomentoData = (array) => saveUnidadFomentoData(array);

  const contextValue = {
    setBitcoinData: useCallback((array) => setBitcoinData(array), []),
    setImacecData: useCallback((array) => setImacecData(array), []),
    setLibraDeCobreData: useCallback(
      (array) => setLibraDeCobreData(array),
      []
    ),
    setTasaDeDesempleoData: useCallback(
      (array) => setTasaDeDesempleoData(array),
      []
    ),
    setDolarAcuerdoData: useCallback(
      (array) => setDolarAcuerdoData(array),
      []
    ),
    setUnidadFomentoData: useCallback(
      (array) => setUnidadFomentoData(array),
      []
    ),
    setDolarObservadoData: useCallback(
      (array) => setDolarObservadoData(array),
      []
    ),
    setUnidadTributariaMensualData: useCallback(
      (array) => setUnidadTributariaMensualData(array),
      []
    ),
    setEuroData: useCallback((array) => setEuroData(array), []),
    bitcoinData,
    dolarAcuerdoData,
    dolarObservadoData,
    unidadTributariaMensualData,
    euroData,
    imacecData,
    libraDeCobreData,
    tasaDeDesempleoData,
    unidadFomentoData,
  };

  return (
    <ContextFinancialIndicators.Provider value={contextValue}>
      {children}
    </ContextFinancialIndicators.Provider>
  );
};

export default ContextFinancialIndicatorsProvider;
