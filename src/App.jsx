import { useState } from "react";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import Header from "./components/Layout/Header/Header";
import Container from "./components/Layout/Container/Container";
import Footer from "./components/Layout/Footer/Footer";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Container>
        <Header />
        <Sidebar />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
