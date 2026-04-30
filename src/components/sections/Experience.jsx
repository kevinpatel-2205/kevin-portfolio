import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useTheme } from "../../context/ThemeContext";
import { experience } from "../../data/portfolioData";
import { Briefcase, Calendar, ChevronRight, Building2 } from "lucide-react";

const SectionTitle = ({ title, subtitle, isDark }) => {
  const gold = "#C9A84C";
  return (
    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
      <p
        style={{
          fontFamily: "'Crimson Text', Georgia, serif",
          fontSize: "0.8rem",
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: gold,
          marginBottom: "0.8rem",
          opacity: 0.8,
        }}
      >
        {subtitle}
      </p>
      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: "800",
          color: gold,
          marginBottom: "1rem",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <svg width="200" height="20" viewBox="0 0 200 20">
          <line
            x1="0"
            y1="10"
            x2="75"
            y2="10"
            stroke={gold}
            strokeWidth="1"
            opacity="0.4"
          />
          <polygon points="85,10 90,5 95,10 90,15" fill={gold} opacity="0.6" />
          <polygon
            points="95,10 100,5 105,10 100,15"
            fill={gold}
            opacity="0.4"
          />
          <polygon
            points="105,10 110,5 115,10 110,15"
            fill={gold}
            opacity="0.6"
          />
          <line
            x1="125"
            y1="10"
            x2="200"
            y2="10"
            stroke={gold}
            strokeWidth="1"
            opacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
};

const ExperienceCard = ({ item, index, isDark }) => {
  const { ref, inView } = useScrollAnimation(0.15);
  const [expanded, setExpanded] = useState(index === 0);
  const [hovered, setHovered] = useState(false);
  const gold = "#C9A84C";
  const isLast = index === experience.length - 1;

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "60px 1fr",
        gap: "0",
        marginBottom: isLast ? "0" : "2rem",
        position: "relative",
      }}
    >
      {/* Timeline column */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Node */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            border: `2px solid ${hovered ? gold : "rgba(201,168,76,0.45)"}`,
            background: isDark
              ? hovered
                ? "rgba(201,168,76,0.12)"
                : "#0a0804"
              : hovered
                ? "rgba(201,168,76,0.15)"
                : "#f5ead2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            flexShrink: 0,
            boxShadow: hovered ? `0 0 22px rgba(201,168,76,0.3)` : "none",
            transition: "all 0.35s ease",
            cursor: "pointer",
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <Briefcase size={18} color={gold} />
        </motion.div>

        {/* Vertical line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 + 0.2 }}
            style={{
              flex: 1,
              width: "1px",
              background: `linear-gradient(180deg, rgba(201,168,76,0.35), rgba(201,168,76,0.05))`,
              transformOrigin: "top",
              marginTop: "6px",
            }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          delay: index * 0.15 + 0.1,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          marginLeft: "1.5rem",
          marginBottom: isLast ? "0" : "1rem",
          padding: "1.6rem",
          borderRadius: "4px",
          border: hovered
            ? `1px solid rgba(201,168,76,0.45)`
            : `1px solid rgba(201,168,76,0.12)`,
          background: hovered
            ? isDark
              ? "rgba(201,168,76,0.06)"
              : "rgba(201,168,76,0.09)"
            : isDark
              ? "rgba(201,168,76,0.02)"
              : "rgba(201,168,76,0.04)",
          transition: "all 0.35s ease",
          boxShadow: hovered
            ? isDark
              ? "0 12px 40px rgba(0,0,0,0.4)"
              : "0 12px 32px rgba(0,0,0,0.1)"
            : "none",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top right corner accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40px",
            height: "40px",
            borderLeft: `1px solid rgba(201,168,76,${hovered ? 0.4 : 0.1})`,
            borderBottom: `1px solid rgba(201,168,76,${hovered ? 0.4 : 0.1})`,
            borderBottomLeftRadius: "4px",
            transition: "all 0.35s",
          }}
        />

        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          {/* Left — logo + company */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Company logo */}
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "4px",
                border: `1px solid rgba(201,168,76,0.2)`,
                background: isDark
                  ? "rgba(201,168,76,0.06)"
                  : "rgba(201,168,76,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.company}
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "contain",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ) : (
                <Building2 size={20} color={gold} opacity={0.6} />
              )}
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.05rem",
                  fontWeight: "700",
                  color: hovered
                    ? gold
                    : isDark
                      ? "rgba(220,200,150,0.92)"
                      : "rgba(60,40,10,0.88)",
                  marginBottom: "0.25rem",
                  transition: "color 0.3s",
                }}
              >
                {item.role}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "'Crimson Text', Georgia, serif",
                  fontSize: "0.9rem",
                  color: isDark
                    ? "rgba(201,168,76,0.65)"
                    : "rgba(139,105,20,0.7)",
                  fontStyle: "italic",
                }}
              >
                <Building2 size={13} />
                {item.company}
              </div>
            </div>
          </div>

          {/* Right — duration badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 14px",
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: "3px",
              background: isDark
                ? "rgba(201,168,76,0.05)"
                : "rgba(201,168,76,0.07)",
              color: gold,
              fontFamily: "'Crimson Text', Georgia, serif",
              fontSize: "0.8rem",
              letterSpacing: "0.5px",
              flexShrink: 0,
            }}
          >
            <Calendar size={12} />
            {item.duration}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(90deg, rgba(201,168,76,0.2), transparent)`,
            marginBottom: "1rem",
          }}
        />

        {/* Description */}
        <p
          style={{
            fontFamily: "'Crimson Text', Georgia, serif",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: isDark ? "rgba(210,190,140,0.65)" : "rgba(80,55,15,0.65)",
            marginBottom: "1rem",
          }}
        >
          {item.description}
        </p>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Crimson Text', Georgia, serif",
            fontSize: "0.85rem",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: gold,
            opacity: 0.75,
            marginBottom: expanded ? "1rem" : "0",
            padding: 0,
            transition: "opacity 0.2s",
          }}
        >
          <motion.div
            animate={{ rotate: expanded ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight size={14} />
          </motion.div>
          {expanded ? "Hide" : "Show"} Responsibilities
        </button>

        {/* Responsibilities */}
        <motion.div
          initial={false}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div
            style={{
              padding: "1rem",
              borderRadius: "3px",
              border: `1px solid rgba(201,168,76,0.1)`,
              background: isDark
                ? "rgba(201,168,76,0.02)"
                : "rgba(201,168,76,0.04)",
            }}
          >
            {item.responsibilities.map((resp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={expanded ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom:
                    i < item.responsibilities.length - 1 ? "0.75rem" : "0",
                }}
              >
                {/* Bullet */}
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: gold,
                    flexShrink: 0,
                    marginTop: "9px",
                    opacity: 0.7,
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Crimson Text', Georgia, serif",
                    fontSize: "0.97rem",
                    lineHeight: 1.7,
                    color: isDark
                      ? "rgba(210,190,140,0.7)"
                      : "rgba(80,55,15,0.65)",
                  }}
                >
                  {resp}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const { isDark } = useTheme();
  const { ref, inView } = useScrollAnimation();
  const gold = "#C9A84C";

  return (
    <section
      id="experience"
      style={{
        minHeight: "100vh",
        padding: "7rem 2rem",
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? "linear-gradient(160deg, #0a0804 0%, #110d06 60%, #0a0804 100%)"
          : "linear-gradient(160deg, #f5ead2 0%, #ede0c0 60%, #f5ead2 100%)",
      }}
    >
      {/* Background arch */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          opacity: isDark ? 0.035 : 0.03,
          pointerEvents: "none",
        }}
      >
        <svg width="420" height="480" viewBox="0 0 420 480">
          <g fill="none" stroke={gold} strokeWidth="1.5">
            <path d="M60,480 L60,240 Q60,60 210,60 Q360,60 360,240 L360,480" />
            <path d="M100,480 L100,255 Q100,120 210,120 Q320,120 320,255 L320,480" />
            <path d="M140,480 L140,270 Q140,170 210,170 Q280,170 280,270 L280,480" />
          </g>
        </svg>
      </div>

      {/* Left pillar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background: isDark
            ? "linear-gradient(180deg, transparent, rgba(201,168,76,0.12), transparent)"
            : "linear-gradient(180deg, transparent, rgba(139,105,20,0.1), transparent)",
        }}
      />

      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle
            title="Chronicle of Work"
            subtitle="Experience"
            isDark={isDark}
          />
        </motion.div>

        {/* Timeline cards */}
        <div style={{ position: "relative" }}>
          {experience.map((item, i) => (
            <ExperienceCard key={i} item={item} index={i} isDark={isDark} />
          ))}
        </div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <svg width="160" height="30" viewBox="0 0 160 30">
            <line
              x1="0"
              y1="15"
              x2="55"
              y2="15"
              stroke={gold}
              strokeWidth="1"
              opacity="0.3"
            />
            <circle cx="65" cy="15" r="4" fill={gold} opacity="0.4" />
            <circle cx="80" cy="15" r="6" fill={gold} opacity="0.5" />
            <circle cx="95" cy="15" r="4" fill={gold} opacity="0.4" />
            <line
              x1="105"
              y1="15"
              x2="160"
              y2="15"
              stroke={gold}
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
