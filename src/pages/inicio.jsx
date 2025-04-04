
import { Hero } from "../components/Hero/Hero";
import { bgImage } from "../utility/bgImage";

function Inicio() {
  

  return (
    <div style={bgImage} className="overflow-hidden min-h-screen">
      
      <Hero></Hero>
      
    </div>
  );
}

export default Inicio;
