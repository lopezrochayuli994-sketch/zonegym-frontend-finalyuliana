import { useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

const SCHEDULES = {
  funcional: ["07:00 AM", "08:00 AM", "06:00 PM", "07:00 PM"],
  fuerza: ["07:30 AM", "06:30 PM", "07:30 PM"],
  cardio: ["06:30 AM", "08:30 AM", "05:30 PM", "06:30 PM"],
  hiit: ["07:00 AM", "07:00 PM"],
  yoga: ["08:00 AM", "09:00 AM", "06:00 PM"],
  pilates: ["09:00 AM", "06:00 PM"],
  spinning: ["06:00 AM", "07:00 AM", "06:00 PM", "07:00 PM"],
  crossfit: ["07:00 AM", "08:00 AM", "06:00 PM", "07:00 PM"],
  indoor: ["08:00 AM", "06:00 PM", "07:00 PM"],
  jumping: ["07:00 AM", "06:00 PM"],
  box: ["07:00 AM", "08:00 AM", "07:00 PM"],
  baile: ["06:00 PM", "07:00 PM"],
  movilidad: ["08:00 AM", "06:00 PM"],
};

const CLASS_NAMES = {
  funcional: "Fuerza funcional",
  fuerza: "Fuerza",
  cardio: "Cardio",
  hiit: "HIIT",
  yoga: "Yoga / movilidad",
  pilates: "Pilates",
  spinning: "Indoor Cycling",
  crossfit: "CrossFit",
  indoor: "Indoor Cycling",
  jumping: "Jumping",
  box: "Box",
  baile: "Baile",
  movilidad: "Yoga / movilidad",
};

export default function ReservaForm() {
  const { claseId } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const hasMembership =
    user?.isActive === true && user?.membershipStatus === "active";

  const className = useMemo(() => {
    return CLASS_NAMES[claseId] || claseId?.toUpperCase() || "Clase";
  }, [claseId]);

  const horarios = useMemo(() => {
    return SCHEDULES[claseId] || ["08:00 AM", "06:00 PM"];
  }, [claseId]);

  const formatDate = (rawDate) => {
    if (!rawDate) return "";
    const [year, month, day] = rawDate.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !time) {
      alert("Selecciona una fecha y un horario.");
      return;
    }

    const reservationData = {
      classId: claseId,
      className,
      date,
      formattedDate: formatDate(date),
      time,
      userName: user.name,
      userEmail: user.email,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("lastReservation", JSON.stringify(reservationData));

    setMessage(
      `Tienes reservación de ${className} el ${formatDate(date)} a las ${time}.`,
    );
  };

  if (!user) {
    return (
      <motion.div
        style={styles.blockPage}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          style={styles.blockCard}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.08, duration: 0.35 }}
        >
          <div style={styles.blockIcon}>🔒</div>
          <h2 style={styles.blockTitle}>Debes iniciar sesión</h2>
          <p style={styles.blockText}>
            Para reservar la clase <strong>{className}</strong> necesitas
            iniciar sesión primero.
          </p>

          <div style={styles.blockActions}>
            <motion.button
              style={styles.primaryAction}
              onClick={() => navigate("/login")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Iniciar sesión
            </motion.button>

            <motion.button
              style={styles.secondaryAction}
              onClick={() => navigate("/classes")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Volver a clases
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (!hasMembership) {
    return (
      <motion.div
        style={styles.blockPage}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          style={styles.blockCard}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.08, duration: 0.35 }}
        >
          <div style={styles.blockIcon}>🏋️</div>
          <h2 style={styles.blockTitle}>Membresía requerida</h2>
          <p style={styles.blockText}>
            Tu cuenta no tiene membresía activa. Activa tu membresía para
            reservar la clase <strong>{className}</strong>.
          </p>

          <div style={styles.blockActions}>
            <motion.button
              style={styles.primaryAction}
              onClick={() => navigate("/paquetes")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver paquetes
            </motion.button>

            <motion.button
              style={styles.secondaryAction}
              onClick={() => navigate("/classes")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Volver a clases
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      style={styles.page}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, scale: 0.98, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.4 }}
      >
        <h2 style={styles.title}>Reservar: {className}</h2>

        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Día de inicio:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
            min={new Date().toISOString().split("T")[0]}
          />

          <label style={styles.label}>Horario:</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={styles.input}
          >
            <option value="">Selecciona una hora</option>
            {horarios.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>

          <motion.button
            type="submit"
            style={styles.button}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 24px rgba(255,122,10,.25)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Confirmar Reserva
          </motion.button>
        </form>

        {message && (
          <motion.div
            style={styles.successBox}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            ✅ {message}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "white",
    padding: "120px 20px 40px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  card: {
    maxWidth: "560px",
    width: "100%",
    background: "#080808",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "24px",
    padding: "36px",
    boxShadow: "0 0 24px rgba(0,0,0,.25)",
  },
  title: {
    textAlign: "center",
    marginBottom: "28px",
    fontSize: "22px",
    fontWeight: 800,
  },
  label: {
    display: "block",
    marginBottom: "10px",
    marginTop: "14px",
    fontSize: "16px",
  },
  input: {
    width: "100%",
    padding: "18px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,.18)",
    background: "#121212",
    color: "white",
    fontSize: "16px",
    marginBottom: "10px",
    outline: "none",
  },
  button: {
    width: "100%",
    marginTop: "24px",
    padding: "18px",
    borderRadius: "999px",
    border: "none",
    background: "#ff7a0a",
    color: "#111",
    fontWeight: 800,
    fontSize: "18px",
    cursor: "pointer",
  },
  successBox: {
    marginTop: "24px",
    padding: "16px 18px",
    borderRadius: "16px",
    background: "rgba(34,197,94,.12)",
    border: "1px solid rgba(34,197,94,.28)",
    color: "#bbf7d0",
    fontWeight: 700,
    lineHeight: 1.5,
  },
  blockPage: {
    minHeight: "100vh",
    background: "#050505",
    color: "white",
    padding: "120px 20px 40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  blockCard: {
    width: "100%",
    maxWidth: "620px",
    background: "#080808",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "28px",
    padding: "40px 32px",
    boxShadow: "0 0 28px rgba(0,0,0,.28)",
    textAlign: "center",
  },
  blockIcon: {
    fontSize: "54px",
    marginBottom: "14px",
  },
  blockTitle: {
    fontSize: "30px",
    fontWeight: 900,
    margin: "0 0 14px",
  },
  blockText: {
    fontSize: "17px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,.82)",
    marginBottom: "26px",
  },
  blockActions: {
    display: "flex",
    gap: "14px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  primaryAction: {
    padding: "15px 26px",
    borderRadius: "999px",
    border: "none",
    background: "#ff7a0a",
    color: "#111",
    fontWeight: 900,
    fontSize: "16px",
    cursor: "pointer",
  },
  secondaryAction: {
    padding: "15px 26px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,.16)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    fontWeight: 900,
    fontSize: "16px",
    cursor: "pointer",
  },
};
