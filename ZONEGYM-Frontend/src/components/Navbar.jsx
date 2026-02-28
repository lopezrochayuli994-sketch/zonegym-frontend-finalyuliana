import React from "react";
import {navbarLinks} from "../data/data";
import {CiSearch} from "react-icons/ci";
import {ImBooks} from "react-icons/im";
import {MdMenu} from "react-icons/md";
import {PiShoppingCartLight} from "react-icons/pi";
import {useState, useEffect} from "react";
import MenuResponsivo from "./MenuResponsivo";
import {motion} from "framer-motion";

const Navbar = () => {
    const [abierto, setAbierto] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                // 768px es el breakpoint 'md' de Tailwind
                setAbierto(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <motion.nav
                initial={{opacity: 0, y: -80}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="fixed top-0 w-full z-50"
            >
                {/* CAMBIO AQUÍ: Agregamos flex, justify-between e items-center 
                   dentro del div con el gradiente.
                */}
                <div className="bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg">
                    <div className="container mx-auto flex justify-between items-center py-4 px-6">
                        {/* SECCIÓN LOGO */}
                        <div className="text-2xl flex items-center gap-2 uppercase min-w-fit">
                            <ImBooks />
                            <p className="flex gap-1">
                                <span>ZONEGYM</span>
                                <span className="text-gray-300">DH</span>
                            </p>
                        </div>

                        {/* SECCIÓN MENÚ ESCRITORIO */}
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-6">
                                {navbarLinks.map((item) => (
                                    <li key={item.id}>
                                        <motion.a
                                            href={item.url}
                                            // ANIMACIONES SOLICITADAS:
                                            whileHover={{
                                                y: -15,
                                                color: "#000000",
                                                scale: 1.05,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 10,
                                            }}
                                            className="text-sm font-medium hover:text-orange-400 duration-200"
                                        >
                                            {item.title}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* SECCIÓN ACCIONES (Iconos + Botón) */}
                        <div className="flex items-center gap-4">
                            <CiSearch className="text-2xl cursor-pointer hover:text-black" />
                            <PiShoppingCartLight className="text-2xl cursor-pointer hover:text-black" />

                            <button className="bg-[#ff4d4d] hover:bg-orange-600 text-white px-4 py-1.5 rounded-md font-bold text-sm transition-all hidden md:block">
                                Ingresar
                            </button>

                            {/* Hamburguesa móvil */}
                            <div className="md:hidden">
                                <MdMenu onClick={() => setAbierto(!abierto)} className="text-3xl cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.nav>

            <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
        </>
    );
};

export default Navbar;
