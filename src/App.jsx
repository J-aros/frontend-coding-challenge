import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import useFinancialIndicators from "./hooks/index";
import axios from "axios";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import Header from "./components/Layout/Header/Header";
import Container from "./components/Layout/Container/Container";
import Footer from "./components/Layout/Footer/Footer";
import Bitcoin from "./components/Pages/Bitcoin";
import DolarAcuerdo from "./components/Pages/DolarAcuerdo";
import DolarObservado from "./components/Pages/DolarObservado";
import Euro from "./components/Pages/Euro";
import Imacec from "./components/Pages/Imacec";
import LibraDeCobre from "./components/Pages/LibraDeCobre";
import TasaDeDesempleo from "./components/Pages/TasaDeDesempleo";
import UnidadFomento from "./components/Pages/UnidadFomento";
import UnidadTributariaMensual from "./components/Pages/UnidadTributariaMensual";
import Banner from "./components/Banner/Banner";
import MainContent from "./components/Layout/MainContent.jsx/MainContent";

function App() {
  //useContext
  const {
    setDolarAcuerdoData,
    setUnidadTributariaMensualData,
    setDolarObservadoData,
    setEuroData,
    setTasaDeDesempleoData,
    setImacecData,
    setLibraDeCobreData,
    setUnidadFomentoData,
    setBitcoinData,
  } = useFinancialIndicators();

  //Fetch financial indicators
  const getFinancialIndicators = async () => {
    const { data } = await axios.get("https://mindicador.cl/api");
    const {
      bitcoin,
      dolar,
      dolar_intercambio,
      euro,
      imacec,
      libra_cobre,
      tasa_desempleo,
      utm,
      uf,
    } = data;

    setBitcoinData(bitcoin);
    setDolarAcuerdoData(dolar_intercambio);
    setUnidadTributariaMensualData(utm);
    setDolarObservadoData(dolar);
    setEuroData(euro);
    setTasaDeDesempleoData(tasa_desempleo);
    setImacecData(imacec);
    setLibraDeCobreData(libra_cobre);
    setUnidadFomentoData(uf);
  };

  useEffect(() => {
    getFinancialIndicators();
  }, []);

  return (
    <Container>
      <Header />
      <BrowserRouter>
        <Sidebar />
        <MainContent>
          <Banner />
          <Routes>
            <Route path="/bitcoin" element={<Bitcoin />} />
            <Route path="/dolaracuerdo" element={<DolarAcuerdo />} />
            <Route path="/dolarobservado" element={<DolarObservado />} />
            <Route path="/euro" element={<Euro />} />
            <Route path="/imacec" element={<Imacec />} />
            <Route path="/" element={<LibraDeCobre />} />
            <Route path="/tasadesempleo" element={<TasaDeDesempleo />} />
            <Route path="/unidadfomento" element={<UnidadFomento />} />
            <Route
              path="/unidadtributariamensual"
              element={<UnidadTributariaMensual />}
            />
          </Routes>
        </MainContent>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
