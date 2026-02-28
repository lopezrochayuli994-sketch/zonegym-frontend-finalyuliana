import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from "./components/secciones/Home.jsx";
import About from "./components/secciones/About.jsx";
import Classes from "./components/secciones/Classes.jsx";
import Services from "./components/secciones/Services.jsx";
import Contact from "./components/secciones/Contact.jsx";
import Schedules from "./components/secciones/Schedules.jsx";
import Testimonials from "./components/secciones/Testimonials.jsx";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Banner />
                            <Home />
                        </>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/schedules" element={<Schedules />} />
                <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
        </main>
    );
}

export default App;
