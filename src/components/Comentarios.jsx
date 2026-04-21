import { useEffect, useState } from "react";

// 🔥 URL REAL DEL BACKEND
const API_URL = "https://zonegym-backend-finalyuliana-production.up.railway.app/api";

export default function Comentarios() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Obtener comentarios
  const fetchComments = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/comments`);

      // 🔥 DEBUG INTELIGENTE
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        console.error("❌ No es JSON:", text);
        throw new Error("Respuesta inválida del servidor");
      }

      const data = await res.json();
      setComments(data);

    } catch (error) {
      console.error(error);
      alert("Error al cargar comentarios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // ✅ Crear comentario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      alert("Escribe un comentario");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          user: "Usuario ZoneGym",
        }),
      });

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        console.error("❌ No es JSON:", text);
        throw new Error("Respuesta inválida del servidor");
      }

      const data = await res.json();

      alert(data.message);
      setText("");
      fetchComments();

    } catch (error) {
      console.error(error);
      alert("Error al enviar comentario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-red-500">
        Comentarios
      </h2>

      {/* FORMULARIO */}
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          className="w-full p-3 rounded-lg text-black"
          placeholder="Escribe tu comentario..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-3 bg-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {/* LOADING */}
      {loading && <p className="text-gray-400">Cargando...</p>}

      {/* LISTA */}
      <div className="space-y-3">
        {comments.map((c) => (
          <div key={c._id} className="bg-white/10 p-3 rounded-lg">
            <p className="font-bold text-red-400">
              {c.user}
            </p>

            {/* ⚠️ NOTA: esto puede ser inseguro si no sanitizas */}
            <p>{c.text}</p>

            <p className="text-xs text-gray-400">
              {new Date(c.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}