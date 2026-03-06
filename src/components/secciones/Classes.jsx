import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const classesData = [
  {
    id: "box",
    title: "Box",
    description: "Alta energía, disciplina, quema calorías y libera estrés.",
    tips: "Ideal si quieres mejorar condición, reflejos y resistencia.",
  },
  {
    id: "indoor",
    title: "Indoor Cycling",
    description: "Cardio intenso con música. Ideal para mejorar resistencia.",
    tips: "Perfecto para quemar calorías y fortalecer piernas.",
  },
  {
    id: "jumping",
    title: "Jumping",
    description: "Diversión + cardio. Perfecto si te aburres en pesas.",
    tips: "Muy buena opción para activar todo el cuerpo.",
  },
  {
    id: "movilidad",
    title: "Yoga / movilidad",
    description:
      "Recuperación y flexibilidad para evitar lesiones y no abandonar.",
    tips: "Te ayuda a mejorar postura, elasticidad y recuperación.",
  },
  {
    id: "baile",
    title: "Baile",
    description: "Ambiente social, energía y movimiento constante.",
    tips: "Excelente para disfrutar el ejercicio y mantenerte activo.",
  },
  {
    id: "funcional",
    title: "Fuerza funcional",
    description: "Rutinas completas para verte y sentirte fuerte en semanas.",
    tips: "Ideal para trabajar fuerza, equilibrio y resistencia.",
  },
];

export default function Classes() {
  const navigate = useNavigate();

  const goToReserva = (classId) => {
    navigate(`/reservar/${classId}`);
  };

  return (
    <motion.section
      style={styles.section}
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={styles.overlay} />

      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          style={styles.topText}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.4 }}
        >
          Entrena con variedad, mantén la constancia y disfruta el proceso.
        </motion.p>

        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.45 }}
        >
          Clases que te enganchan
        </motion.h1>

        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.45 }}
        >
          Elige tu clase favorita, revisa horarios y reserva tu lugar de forma
          rápida.
        </motion.p>

        <motion.div
          style={styles.heroActions}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.45 }}
        >
          <motion.button
            style={styles.btnGhost}
            onClick={() => navigate("/horarios")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver horarios
          </motion.button>
        </motion.div>

        <motion.div
          style={styles.grid}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.28,
              },
            },
          }}
        >
          {classesData.map((item) => (
            <motion.div
              key={item.id}
              style={styles.card}
              variants={{
                hidden: { opacity: 0, y: 22, scale: 0.98 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{
                y: -8,
                scale: 1.015,
                borderColor: "rgba(255,122,10,.28)",
                boxShadow: "0 0 28px rgba(255,122,10,.12)",
              }}
              transition={{ duration: 0.22 }}
            >
              <div style={styles.cardTop}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
              </div>

              <p style={styles.cardText}>{item.description}</p>

              <div style={styles.cardActions}>
                <motion.button
                  style={styles.btnPrimary}
                  onClick={() => goToReserva(item.id)}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 0 22px rgba(255,122,10,.30)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Reservar clase
                </motion.button>

                <motion.button
                  style={styles.btnSecondary}
                  onClick={() => alert(item.tips)}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver tips
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

const styles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    padding: "110px 28px 70px",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=2400&auto=format&fit=crop")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.80) 45%, rgba(0,0,0,.92) 100%)",
  },
  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1500px",
    margin: "0 auto",
    color: "#fff",
  },
  topText: {
    textAlign: "center",
    opacity: 0.84,
    marginBottom: "10px",
    fontSize: "15px",
  },
  title: {
    textAlign: "center",
    fontSize: "64px",
    lineHeight: 1.02,
    fontWeight: 900,
    margin: 0,
  },
  subtitle: {
    textAlign: "center",
    fontSize: "18px",
    opacity: 0.92,
    margin: "14px auto 22px",
    maxWidth: "860px",
    lineHeight: 1.5,
  },
  heroActions: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "26px",
  },
  btnGhost: {
    padding: "14px 26px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,.20)",
    background: "rgba(0,0,0,.25)",
    color: "#fff",
    fontWeight: 800,
    fontSize: "16px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "18px",
  },
  card: {
    background: "rgba(0,0,0,.45)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "24px",
    padding: "22px",
    backdropFilter: "blur(10px)",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  cardTitle: {
    fontSize: "28px",
    fontWeight: 900,
    margin: 0,
  },
  cardText: {
    fontSize: "17px",
    lineHeight: 1.45,
    opacity: 0.9,
    marginBottom: "20px",
    minHeight: "74px",
  },
  cardActions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  btnPrimary: {
    padding: "15px 24px",
    borderRadius: "999px",
    border: "none",
    background: "#ff7a0a",
    color: "#111",
    fontWeight: 900,
    fontSize: "16px",
    cursor: "pointer",
  },
  btnSecondary: {
    padding: "15px 24px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,.16)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    fontWeight: 900,
    fontSize: "16px",
    cursor: "pointer",
  },
};
