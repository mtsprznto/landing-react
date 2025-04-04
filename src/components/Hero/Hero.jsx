import gifImage from "../../assets/pcgid.gif";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { slipeUp, slipeInFromSide } from "../../utility/animation";

export const Hero = () => {
  return (
    <section className="mt-15 mb-36 sm:mt-20 md:mt-24 lg:mt-25 lg:mb-36">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Textos y descripcion */}
        <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36 align-middle">
          <motion.img
            src={Logo}
            alt="Logo principal"
            variants={slipeUp(0.2)}
            initial="initial"
            animate="animate"
            className="w-[200px] rounded-full"
          />
          <motion.p
            className="py-12 text-[#f3f1fc]"
            variants={slipeUp(0.2)}
            initial="initial"
            animate="animate"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
            earum aliquam accusantium minus eveniet ipsa corporis fuga veniam
            dolorum molestias distinctio, aspernatur est dolore dicta, nostrum
            cumque ullam magnam aliquid.
          </motion.p>

          {/* <div className="flex justify-center gap-4">
            <a
              href=""
              className="bg-[#9567c4] py-2 px-4 rounded-3xl hover:bg-[#69488b] transition-all duration-300 items-center cursor-pointer"
            >
              Buscar <i className="bi bi-search text-xl ml-2"></i>
            </a>
            <a href="" className="flex items-center cursor-pointer">
              Ir <i className="bi bi-arrow-right-circle text-xl ml-2"></i>
            </a>
          </div> */}


        </div>
        {/* Imagenes */}
        <motion.div
          className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36"
          variants={slipeInFromSide("rigth",0.5)}
          initial="initial"
          animate="animate"
        >
          <img
            src={gifImage}
            alt="Animación ilustrativa del pc"
            className="rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};
