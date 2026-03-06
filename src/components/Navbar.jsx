import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Navbar({ navbarLinks = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="bg-gradient-to-r from-red-700 to-red-900 border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-extrabold tracking-tight text-white">
          <span>🏋️</span>
          <span>ZoneGym Dolores Hidalgo</span>
        </div>

        <div className="flex items-center gap-3 text-white">
          <nav className="hidden md:flex gap-2 text-sm">
            {navbarLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full transition ${
                    isActive ? "bg-white/20" : "hover:bg-white/10"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            {user?.role === "admin" && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full transition ${
                    isActive ? "bg-white/20" : "hover:bg-white/10"
                  }`
                }
              >
                Administrador
              </NavLink>
            )}
          </nav>

          {user ? (
            <div className="hidden md:flex items-center gap-3">
              <span className="text-sm font-semibold">
                Bienvenido, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-sm font-bold"
              >
                Salir
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden md:block px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-sm font-bold"
            >
              Iniciar sesión
            </Link>
          )}

          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-red-900 border-t border-white/10 px-4 py-4 flex flex-col gap-3 animate-fade-in-down">
          {navbarLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-white transition ${
                  isActive ? "bg-white/20" : "hover:bg-white/10"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          {user?.role === "admin" && (
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg bg-white/10 text-white font-bold text-center"
            >
              Administrador
            </Link>
          )}

          {user ? (
            <>
              <div className="px-4 py-2 text-white font-semibold">
                Bienvenido, {user.name}
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-3 rounded-lg bg-white text-red-800 font-bold text-center"
              >
                Salir
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg bg-white text-red-800 font-bold text-center"
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
