import { Link } from "react-router-dom";

export default function MembershipRequired() {
  const phoneNumber = "525669554057";
  const message = encodeURIComponent(
    "Hola, quiero activar mi membresía de ZoneGym. Ya realicé mi pago y deseo enviar mi comprobante para validación.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 text-center">
        <div className="text-6xl mb-4">🔒</div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-red-500 mb-4">
          Acceso exclusivo para miembros
        </h1>

        <p className="text-gray-300 text-lg mb-3">
          Las secciones <span className="font-bold text-white">Reto</span> y{" "}
          <span className="font-bold text-white">Mi Progreso</span> solo están
          disponibles para usuarios con membresía activa.
        </p>

        <p className="text-gray-400 mb-8">
          Para desbloquear estas funciones, elige un paquete, realiza tu pago y
          envía tu comprobante para validación del administrador.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            to="/login"
            className="px-5 py-3 rounded-xl bg-white text-red-800 font-bold hover:scale-105 transition text-center"
          >
            Iniciar sesión
          </Link>

          <Link
            to="/paquetes"
            className="px-5 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition text-center"
          >
            Ver paquetes
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl border border-white/20 bg-white/10 text-white font-bold hover:bg-white/20 transition text-center"
          >
            Enviar comprobante
          </a>
        </div>

        <div className="mt-8 text-sm text-gray-400 bg-white/5 rounded-2xl p-4 border border-white/10">
          <p className="font-semibold text-white mb-1">
            ¿Ya realizaste tu pago?
          </p>
          <p>
            Envía tu comprobante por WhatsApp o regístrate para que el
            administrador pueda validar tu membresía y activar tu acceso.
          </p>
        </div>
      </div>
    </div>
  );
}
