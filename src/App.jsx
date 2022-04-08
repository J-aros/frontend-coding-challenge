import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Container>
      <Header />

      <BrowserRouter>
        <Sidebar />
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
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
