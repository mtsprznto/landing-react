import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./pages/inicio";
import { Nosotros } from "./pages/nosotros";
import { Contacto } from "./pages/contacto";
import Fondo from "./assets/fondo.jpg";
import { Soporte } from "./pages/soporte";


function App() {
  const bgImage = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "repeat",
    backgroundPosition: "bottom",
    // backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div style={bgImage}>
      <Navbar></Navbar>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route path="/soporte" element={<Soporte></Soporte>}></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </Layout>
      <Footer></Footer>
    </div>
  );
}

export default App;
