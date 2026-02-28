import React from "react";
import {motion} from "framer-motion";

const Banner = () => {
    return (
        <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
            {/* Imagen de fondo con Overlay Oscuro */}
            <div className="absolute inset-0 z-0">
                <img src="tu-imagen-de-gym.jpg" className="w-full h-full object-cover" alt="Gym Background" />
                {/* Este div crea el efecto oscuro de la imagen 2 */}
                <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-red-900/20 to-black"></div>
            </div>

            {/* Contenido Central */}
            <div className="container relative z-10 text-center space-y-6">
                <motion.h2
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    className="text-2xl md:text-3xl font-semibold tracking-widest uppercase"
                >
                    No se trata de empezar. Se trata de continuar.
                </motion.h2>

                <motion.p className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base">
                    En ZoneGym no vendemos "motivación barata". Diseñamos constancia...
                </motion.p>

                {/* Botones Estilo Imagen 2 */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <button className="bg-[#ff4d4d] hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(255,77,77,0.4)]">
                        Ver reto del mes
                    </button>
                    <button className="border border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold transition-all">
                        Ver horarios
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Banner;
