import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail, FolderOpen, MapPin } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { personalInfo } from "../../data/portfolioData";
import HistoryBackground from "../ui/HistoryBackground";

const Hero = () => {
  const { isDark } = useTheme();

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const gold = "#C9A84C";
  const darkText = "rgba(220,200,150,0.9)";
  const lightText = "rgba(60,40,10,0.85)";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "70px",
        background: isDark
          ? "linear-gradient(160deg, #0a0804 0%, #150f06 40%, #0a0804 100%)"
          : "linear-gradient(160deg, #f5ead2 0%, #ede0c0 40%, #f5ead2 100%)",
      }}
    >
      <HistoryBackground isDark={isDark} />

      {/* Subtle parchment texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: isDark
            ? `radial-gradient(ellipse at 30% 60%, rgba(139,69,19,0.06) 0%, transparent 55%),
             radial-gradient(ellipse at 75% 25%, rgba(201,168,76,0.05) 0%, transparent 55%)`
            : `radial-gradient(ellipse at 30% 60%, rgba(139,69,19,0.08) 0%, transparent 55%),
             radial-gradient(ellipse at 75% 25%, rgba(201,168,76,0.08) 0%, transparent 55%)`,
          pointerEvents: "none",
        }}
      />

      {/* Main grid */}
      <div
        className="hero-grid"
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* LEFT — Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Location tag */}
          <motion.div variants={itemVariants}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                border: `1px solid rgba(201,168,76,0.35)`,
                borderRadius: "3px",
                padding: "5px 14px",
                marginBottom: "1.8rem",
                fontSize: "0.8rem",
                color: gold,
                fontFamily: "'Crimson Text', Georgia, serif",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                background: isDark
                  ? "rgba(201,168,76,0.05)"
                  : "rgba(201,168,76,0.07)",
              }}
            >
              <MapPin size={13} />
              {personalInfo.location}
            </span>
          </motion.div>

          {/* Decorative rule */}
          <motion.div variants={itemVariants} style={{ marginBottom: "1rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: isDark ? "rgba(201,168,76,0.5)" : "rgba(139,105,20,0.5)",
                fontSize: "0.75rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontFamily: "'Crimson Text', Georgia, serif",
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "currentColor",
                  opacity: 0.4,
                }}
              />
              Greetings
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "currentColor",
                  opacity: 0.4,
                }}
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)",
              fontWeight: "800",
              lineHeight: 1.1,
              marginBottom: "0.4rem",
              color: gold,
              textShadow: isDark ? "0 0 40px rgba(201,168,76,0.2)" : "none",
            }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Subtitle ornament */}
          <motion.div
            variants={itemVariants}
            style={{ marginBottom: "1.2rem" }}
          >
            <svg width="160" height="16" viewBox="0 0 160 16">
              <line
                x1="0"
                y1="8"
                x2="60"
                y2="8"
                stroke={gold}
                strokeWidth="1"
                opacity="0.5"
              />
              <polygon
                points="70,8 75,3 80,8 75,13"
                fill={gold}
                opacity="0.7"
              />
              <polygon
                points="80,8 85,3 90,8 85,13"
                fill={gold}
                opacity="0.5"
              />
              <line
                x1="100"
                y1="8"
                x2="160"
                y2="8"
                stroke={gold}
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            variants={itemVariants}
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.55rem)",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              marginBottom: "1.5rem",
              color: isDark ? "rgba(220,200,150,0.85)" : "rgba(80,55,15,0.85)",
              minHeight: "2.2rem",
            }}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Specialist",
                2000,
                "UI / UX Craftsman",
                2000,
                "Open Source Builder",
                2000,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "'Crimson Text', Georgia, serif",
              fontSize: "1.1rem",
              color: isDark ? "rgba(210,190,140,0.65)" : "rgba(80,55,15,0.6)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "500px",
            }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            {/* View Projects — primary */}
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: `0 8px 28px rgba(201,168,76,0.35)`,
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#projects")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 26px",
                borderRadius: "3px",
                border: `1px solid ${gold}`,
                background: isDark
                  ? "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))"
                  : "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.08))",
                color: gold,
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: "600",
                fontSize: "0.9rem",
                cursor: "pointer",
                letterSpacing: "0.8px",
              }}
            >
              <FolderOpen size={17} />
              View Projects
            </motion.button>

            {/* Resume */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={personalInfo.resumeUrl}
              download
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 26px",
                borderRadius: "3px",
                border: `1px solid ${isDark ? "rgba(210,190,140,0.25)" : "rgba(80,55,15,0.25)"}`,
                background: "transparent",
                color: isDark ? "rgba(210,190,140,0.8)" : "rgba(80,55,15,0.8)",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: "600",
                fontSize: "0.9rem",
                cursor: "pointer",
                textDecoration: "none",
                letterSpacing: "0.8px",
              }}
            >
              <Download size={17} />
              Resume
            </motion.a>

            {/* Contact */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#contact")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 26px",
                borderRadius: "3px",
                border: `1px solid ${isDark ? "rgba(139,69,19,0.35)" : "rgba(139,69,19,0.3)"}`,
                background: isDark
                  ? "rgba(139,69,19,0.08)"
                  : "rgba(139,69,19,0.06)",
                color: isDark
                  ? "rgba(210,170,110,0.85)"
                  : "rgba(100,55,10,0.85)",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: "600",
                fontSize: "0.9rem",
                cursor: "pointer",
                letterSpacing: "0.8px",
              }}
            >
              <Mail size={17} />
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT — Heritage Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Outer decorative frame */}
          <motion.div
            animate={{ rotate: [0, 1, 0, -1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
            }}
          >
            <svg width="300" height="300" viewBox="0 0 300 300">
              {/* Ornate square frame */}
              <rect
                x="10"
                y="10"
                width="280"
                height="280"
                fill="none"
                stroke={gold}
                strokeWidth="1"
                opacity="0.25"
              />
              <rect
                x="20"
                y="20"
                width="260"
                height="260"
                fill="none"
                stroke={gold}
                strokeWidth="0.5"
                opacity="0.15"
              />
              {/* Corner ornaments */}
              {[
                [10, 10],
                [290, 10],
                [10, 290],
                [290, 290],
              ].map(([cx, cy], i) => (
                <g key={i} transform={`translate(${cx},${cy})`}>
                  <polygon
                    points={`0,0 ${i === 1 || i === 3 ? -1 : 1}*20,0 0,${i > 1 ? -1 : 1}*20`}
                    fill={gold}
                    opacity="0.4"
                    transform={`scale(${i === 1 || i === 3 ? -1 : 1},${i > 1 ? -1 : 1})`}
                  />
                  <circle r="4" fill={gold} opacity="0.5" />
                </g>
              ))}
              {/* Side mid ornaments */}
              <circle cx="150" cy="10" r="3" fill={gold} opacity="0.4" />
              <circle cx="150" cy="290" r="3" fill={gold} opacity="0.4" />
              <circle cx="10" cy="150" r="3" fill={gold} opacity="0.4" />
              <circle cx="290" cy="150" r="3" fill={gold} opacity="0.4" />
            </svg>
          </motion.div>

          {/* Glow */}
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: isDark
                ? "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Profile Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "190px",
              height: "190px",
              borderRadius: "4px",
              overflow: "hidden",
              border: `2px solid ${gold}`,
              position: "relative",
              zIndex: 2,
              boxShadow: isDark
                ? `0 0 40px rgba(201,168,76,0.2), 0 20px 60px rgba(0,0,0,0.5)`
                : `0 0 30px rgba(201,168,76,0.15), 0 20px 40px rgba(0,0,0,0.15)`,
            }}
          >
            {personalInfo.profileImage ? (
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: isDark
                    ? "linear-gradient(160deg, #150f06, #1e1508)"
                    : "linear-gradient(160deg, #e8d5a3, #d4b870)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "5rem",
                    fontWeight: "800",
                    color: gold,
                    lineHeight: 1,
                    textShadow: `0 0 30px rgba(201,168,76,0.4)`,
                  }}
                >
                  K
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "3px",
                    color: isDark
                      ? "rgba(201,168,76,0.5)"
                      : "rgba(100,75,20,0.6)",
                    textTransform: "uppercase",
                    fontFamily: "'Crimson Text', Georgia, serif",
                  }}
                >
                  Developer
                </div>
              </div>
            )}
          </motion.div>

          {/* Floating tech tags — heritage style */}
          {[
            { label: "React", x: "-115px", y: "-55px", delay: 0 },
            { label: "Node.js", x: "95px", y: "-70px", delay: 0.6 },
            { label: "MongoDB", x: "-120px", y: "65px", delay: 1.1 },
            { label: "Figma", x: "100px", y: "75px", delay: 1.6 },
          ].map((badge) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
              transition={{
                opacity: { delay: badge.delay + 1, duration: 0.5 },
                scale: { delay: badge.delay + 1, duration: 0.5 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay,
                },
              }}
              style={{
                position: "absolute",
                left: `calc(50% + ${badge.x})`,
                top: `calc(50% + ${badge.y})`,
                transform: "translate(-50%, -50%)",
                background: isDark
                  ? "rgba(15,11,5,0.92)"
                  : "rgba(245,235,210,0.95)",
                border: `1px solid rgba(201,168,76,0.4)`,
                borderRadius: "3px",
                padding: "5px 12px",
                fontSize: "0.78rem",
                fontFamily: "'Crimson Text', Georgia, serif",
                fontWeight: "600",
                color: gold,
                backdropFilter: "blur(10px)",
                boxShadow: `0 4px 15px rgba(0,0,0,0.3)`,
                whiteSpace: "nowrap",
                zIndex: 3,
                letterSpacing: "0.5px",
              }}
            >
              {badge.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollTo("#about")}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            letterSpacing: "3px",
            color: isDark ? "rgba(201,168,76,0.4)" : "rgba(139,105,20,0.4)",
            textTransform: "uppercase",
            fontFamily: "'Crimson Text', Georgia, serif",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "22px",
            height: "36px",
            borderRadius: "11px",
            border: `1px solid ${isDark ? "rgba(201,168,76,0.25)" : "rgba(139,105,20,0.25)"}`,
            display: "flex",
            justifyContent: "center",
            paddingTop: "5px",
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: "3px",
              height: "7px",
              borderRadius: "2px",
              background: gold,
            }}
          />
        </div>
      </motion.div>

      <style>{`
        .hero-grid { grid-template-columns: 1.1fr 0.9fr; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 2.5rem !important; }
          .hero-grid > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
