import React from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Inicio() {
  const navigate = useNavigate();

  const irReto = () => navigate("/reto");
  const irHorarios = () => navigate("/horarios");

  return (
    <motion.section
      style={styles.section}
      initial={{ opacity: 0, y: 16, scale: 1.02 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={styles.overlay} />

      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
      >
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5 }}
        >
          NO SE TRATA DE EMPEZAR.
          <br />
          <motion.span
            style={styles.titleAccent}
            animate={{
              textShadow: [
                "0 0 10px rgba(249,115,22,.20)",
                "0 0 22px rgba(249,115,22,.45)",
                "0 0 10px rgba(249,115,22,.20)",
              ],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            SE TRATA DE CONTINUAR.
          </motion.span>
        </motion.h1>

        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.45 }}
        >
          En ZoneGym no vendemos “motivación barata”. Diseñamos constancia:
          horarios claros, clases que te enganchan y un reto mensual que te
          empuja.
        </motion.p>

        <motion.div
          style={styles.actions}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
        >
          <motion.button
            style={styles.btnPrimary}
            onClick={irReto}
            whileHover={{
              scale: 1.06,
              y: -2,
              boxShadow: "0 0 24px rgba(249,115,22,.35)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
          >
            Ver reto del mes
          </motion.button>

          <motion.button
            style={styles.btnGhost}
            onClick={irHorarios}
            whileHover={{
              scale: 1.04,
              y: -2,
              backgroundColor: "rgba(255,255,255,.10)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            Ver horarios
          </motion.button>

          <motion.button
            style={styles.btnGhost2}
            onClick={() => navigate("/paquetes")}
            whileHover={{
              scale: 1.04,
              y: -2,
              backgroundColor: "rgba(255,255,255,.16)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            Ver paquetes
          </motion.button>
        </motion.div>

        <motion.div
          style={styles.msgCard}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.015,
            borderColor: "rgba(249,115,22,.35)",
            boxShadow: "0 0 24px rgba(249,115,22,.12)",
          }}
          transition={{ delay: 0.32, duration: 0.45 }}
        >
          <div style={styles.msgTitle}>Mensaje motivacional</div>
          <div style={styles.msgText}>
            “Hoy no entrenas por el cuerpo que quieres, entrenas por la persona
            en la que te estás convirtiendo. Un día cuenta. Una semana
            construye. Un mes te transforma. No falles dos veces seguidas.”
          </div>
        </motion.div>

        <motion.div
          style={styles.motivationWrap}
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{
            y: -4,
            boxShadow: "0 0 30px rgba(249,115,22,.10)",
            borderColor: "rgba(249,115,22,.28)",
          }}
          transition={{ delay: 0.38, duration: 0.45 }}
        >
          <div style={styles.motivationHeader}>
            <span style={styles.motivationBadge}>
              🔥 Tu mejor versión empieza hoy
            </span>
          </div>

          <h3 style={styles.motivationTitle}>
            No esperes sentirte listo. Empieza y deja que el progreso te motive.
          </h3>

          <p style={styles.motivationText}>
            Cada entrenamiento suma. Cada día que vienes al gym construyes
            disciplina, energía, confianza y resultados reales. No se trata de
            hacerlo perfecto, se trata de no rendirte.
          </p>

          <div style={styles.motivationGrid}>
            <motion.div
              style={styles.motivationCard}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ delay: 0.45, duration: 0.35 }}
            >
              <div style={styles.motivationCardTitle}>💪 Más fuerza</div>
              <div style={styles.motivationCardText}>
                Entrenar constantemente mejora tu resistencia, tu energía y tu
                seguridad.
              </div>
            </motion.div>

            <motion.div
              style={styles.motivationCard}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ delay: 0.53, duration: 0.35 }}
            >
              <div style={styles.motivationCardTitle}>🧠 Más disciplina</div>
              <div style={styles.motivationCardText}>
                El gym no solo transforma tu cuerpo, también fortalece tu mente.
              </div>
            </motion.div>

            <motion.div
              style={styles.motivationCard}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ delay: 0.61, duration: 0.35 }}
            >
              <div style={styles.motivationCardTitle}>🔥 Resultados reales</div>
              <div style={styles.motivationCardText}>
                Cuando eres constante, los cambios llegan y se notan dentro y
                fuera del gym.
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          style={styles.cards}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.48,
              },
            },
          }}
        >
          <Card
            title="⚡ Plan sencillo"
            text="3 días por semana (mínimo). Mejor poco constante que mucho y abandonar."
            onClick={() => navigate("/paquetes")}
          />
          <Card
            title="🕒 Horarios reales"
            text="Opciones mañana/tarde/noche para que el gym encaje en tu vida."
            onClick={irHorarios}
          />
          <Card
            title="🏁 Reto del mes"
            text="12 entrenamientos/mes para crear hábito y aumentar renovación."
            onClick={irReto}
          />
          <Card
            title="🤝 Comunidad"
            text="La gente vuelve cuando se siente acompañada y ve progreso."
            onClick={() => navigate("/testimonios")}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function Card({ title, text, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      style={styles.card}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        borderColor: "rgba(249,115,22,.30)",
        boxShadow: "0 0 24px rgba(249,115,22,.12)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div style={styles.cardTitle}>{title}</div>
      <div style={styles.cardText}>{text}</div>
      <div style={styles.cardMini}>Click para ver</div>
    </motion.button>
  );
}

const styles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    padding: "110px 20px 90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
      "linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.78) 45%, rgba(0,0,0,.88) 100%)",
  },
  container: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1100px",
    color: "#fff",
    textAlign: "center",
    filter: "drop-shadow(0 0 18px rgba(0,0,0,.18))",
  },

  title: {
    fontSize: "44px",
    fontWeight: 900,
    lineHeight: 1.04,
    marginBottom: "12px",
  },
  titleAccent: {
    color: "#f97316",
    textShadow: "0 0 18px rgba(249,115,22,.35)",
  },
  subtitle: {
    opacity: 0.9,
    maxWidth: "820px",
    margin: "0 auto 18px",
    lineHeight: 1.5,
  },

  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
  },
  btnPrimary: {
    padding: "12px 16px",
    borderRadius: "999px",
    border: 0,
    fontWeight: 900,
    cursor: "pointer",
    background: "#f97316",
    color: "#111",
  },
  btnGhost: {
    padding: "12px 16px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,.25)",
    fontWeight: 900,
    cursor: "pointer",
    background: "rgba(0,0,0,.20)",
    color: "#fff",
  },
  btnGhost2: {
    padding: "12px 16px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,.16)",
    fontWeight: 900,
    cursor: "pointer",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
  },

  msgCard: {
    margin: "18px auto 14px",
    maxWidth: "760px",
    textAlign: "left",
    background: "rgba(0,0,0,.33)",
    border: "1px solid rgba(255,255,255,.14)",
    borderRadius: "16px",
    padding: "16px 18px",
    backdropFilter: "blur(10px)",
  },
  msgTitle: { fontWeight: 900, marginBottom: "6px" },
  msgText: { opacity: 0.9, lineHeight: 1.45 },

  motivationWrap: {
    margin: "10px auto 0",
    maxWidth: "900px",
    textAlign: "left",
    background: "rgba(0,0,0,.30)",
    border: "1px solid rgba(255,255,255,.14)",
    borderRadius: "20px",
    padding: "22px 20px",
    backdropFilter: "blur(10px)",
  },
  motivationHeader: {
    marginBottom: "12px",
  },
  motivationBadge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(249,115,22,.15)",
    border: "1px solid rgba(249,115,22,.35)",
    color: "#fdba74",
    fontWeight: 800,
    fontSize: "13px",
  },
  motivationTitle: {
    fontSize: "28px",
    fontWeight: 900,
    lineHeight: 1.15,
    marginBottom: "12px",
    color: "#fff",
  },
  motivationText: {
    fontSize: "16px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,.85)",
    marginBottom: "18px",
  },
  motivationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "14px",
  },
  motivationCard: {
    background: "rgba(255,255,255,.04)",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "16px",
    padding: "16px",
  },
  motivationCardTitle: {
    fontWeight: 900,
    color: "#fb923c",
    marginBottom: "8px",
  },
  motivationCardText: {
    fontSize: "14px",
    lineHeight: 1.5,
    color: "rgba(255,255,255,.78)",
  },

  cards: {
    marginTop: "18px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "14px",
  },
  card: {
    textAlign: "left",
    padding: "16px 16px 14px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(0,0,0,.28)",
    color: "#fff",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  },
  cardTitle: { fontWeight: 900, marginBottom: "6px" },
  cardText: { opacity: 0.9, lineHeight: 1.35, marginBottom: "10px" },
  cardMini: { fontSize: "12px", opacity: 0.75 },
};
