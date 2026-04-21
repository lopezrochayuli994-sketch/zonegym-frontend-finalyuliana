import { useEffect, useState } from "react";

const Perfil = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("/api/perfil", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Perfil</h1>

      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Perfil;