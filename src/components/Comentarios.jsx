import { useEffect, useState } from "react";

const API_URL = "";

export default function Comentarios() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  // ✅ Obtener comentarios
  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comments`);
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.error(error);
      alert("Error al cargar comentarios");
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
      const res = await fetch(`/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          user: "Usuario ZoneGym",
        }),
      });

      const data = await res.json();

      alert(data.message);
      setText("");
      fetchComments(); // 🔥 recargar lista
    } catch (error) {
      console.error(error);
      alert("Error al enviar comentario");
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
          className="mt-3 bg-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-700"
        >
          Enviar
        </button>
      </form>

      {/* LISTA */}
      <div className="space-y-3">
        {comments.map((c) => (
          <div
            key={c._id}
            className="bg-white/10 p-3 rounded-lg"
          >
            <p className="font-bold text-red-400">
              {c.user}
            </p>
            <div dangerouslySetInnerHTML={{ __html: c.text }} />
           


            <p className="text-xs text-gray-400">
              {new Date(c.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
