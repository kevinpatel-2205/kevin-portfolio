import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useTheme } from "../../context/ThemeContext";
import { education } from "../../data/portfolioData";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { useState } from "react";

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

const EducationCard = ({ item, index, isDark }) => {
  const { ref, inView } = useScrollAnimation(0.2);
  const [hovered, setHovered] = useState(false);
  const gold = "#C9A84C";
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 60px 1fr",
        gap: "0",
        alignItems: "start",
        marginBottom: "3rem",
        position: "relative",
      }}
      className="edu-row"
    >
      {/* Left side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
        style={{
          padding: "0 2rem 0 0",
          display: "flex",
          justifyContent: "flex-end",
          visibility: isLeft ? "visible" : "hidden",
        }}
      >
        {isLeft && (
          <EducationContent
            item={item}
            isDark={isDark}
            hovered={hovered}
            setHovered={setHovered}
            align="right"
          />
        )}
      </motion.div>

      {/* Center timeline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          style={{
            position: "absolute",
            top: "30px",
            width: "1px",
            height: "calc(100% + 3rem)",
            background: `linear-gradient(180deg, rgba(201,168,76,0.4), rgba(201,168,76,0.05))`,
            transformOrigin: "top",
          }}
        />

        {/* Node */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            border: `2px solid ${gold}`,
            background: isDark ? "#0a0804" : "#f5ead2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            boxShadow: `0 0 20px rgba(201,168,76,0.25)`,
            flexShrink: 0,
          }}
        >
          <GraduationCap size={20} color={gold} />
        </motion.div>
      </div>

      {/* Right side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
        style={{
          padding: "0 0 0 2rem",
          visibility: !isLeft ? "visible" : "hidden",
        }}
      >
        {!isLeft && (
          <EducationContent
            item={item}
            isDark={isDark}
            hovered={hovered}
            setHovered={setHovered}
            align="left"
          />
        )}
      </motion.div>
    </div>
  );
};

const EducationContent = ({ item, isDark, hovered, setHovered, align }) => {
  const gold = "#C9A84C";

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      style={{
        width: "100%",
        maxWidth: "440px",
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
            ? "0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.08)"
            : "0 12px 32px rgba(0,0,0,0.1)"
          : "none",
        textAlign: align === "right" ? "right" : "left",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corner accent */}
      <div
        style={{
          position: "absolute",
          ...(align === "right" ? { top: 0, left: 0 } : { top: 0, right: 0 }),
          width: "35px",
          height: "35px",
          borderRight:
            align === "right"
              ? `1px solid rgba(201,168,76,${hovered ? 0.4 : 0.1})`
              : "none",
          borderLeft:
            align === "left"
              ? `1px solid rgba(201,168,76,${hovered ? 0.4 : 0.1})`
              : "none",
          borderBottom: `1px solid rgba(201,168,76,${hovered ? 0.4 : 0.1})`,
          ...(align === "right"
            ? { borderBottomRightRadius: "4px" }
            : { borderBottomLeftRadius: "4px" }),
          transition: "all 0.35s",
        }}
      />

      {/* Logo + Year row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: align === "right" ? "flex-end" : "flex-start",
          gap: "12px",
          marginBottom: "1rem",
        }}
      >
        {align === "left" && item.logo && (
          <div
            style={{
              width: "40px",
              height: "40px",
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
            <img
              src={item.logo}
              alt=""
              style={{ width: "26px", height: "26px", objectFit: "contain" }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 12px",
            border: `1px solid rgba(201,168,76,0.25)`,
            borderRadius: "3px",
            background: isDark
              ? "rgba(201,168,76,0.05)"
              : "rgba(201,168,76,0.07)",
            color: gold,
            fontFamily: "'Crimson Text', Georgia, serif",
            fontSize: "0.78rem",
            letterSpacing: "1px",
          }}
        >
          <Calendar size={12} />
          {item.year}
        </div>

        {align === "right" && item.logo && (
          <div
            style={{
              width: "40px",
              height: "40px",
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
            <img
              src={item.logo}
              alt=""
              style={{ width: "26px", height: "26px", objectFit: "contain" }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}
      </div>

      {/* Institution */}
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
          marginBottom: "0.4rem",
          lineHeight: 1.3,
          transition: "color 0.3s",
        }}
      >
        {item.institution}
      </h3>

      {/* Degree */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: align === "right" ? "flex-end" : "flex-start",
          gap: "6px",
          marginBottom: "0.8rem",
        }}
      >
        <BookOpen size={13} color={gold} opacity={0.7} />
        <span
          style={{
            fontFamily: "'Crimson Text', Georgia, serif",
            fontSize: "0.92rem",
            fontStyle: "italic",
            color: isDark ? "rgba(201,168,76,0.7)" : "rgba(139,105,20,0.75)",
          }}
        >
          {item.degree}
        </span>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background:
            align === "right"
              ? `linear-gradient(270deg, rgba(201,168,76,0.25), transparent)`
              : `linear-gradient(90deg, rgba(201,168,76,0.25), transparent)`,
          marginBottom: "0.8rem",
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: "'Crimson Text', Georgia, serif",
          fontSize: "0.95rem",
          lineHeight: 1.75,
          color: isDark ? "rgba(210,190,140,0.6)" : "rgba(80,55,15,0.6)",
        }}
      >
        {item.description}
      </p>
    </motion.div>
  );
};

const Education = () => {
  const { isDark } = useTheme();
  const { ref, inView } = useScrollAnimation();
  const gold = "#C9A84C";

  return (
    <section
      id="education"
      style={{
        minHeight: "100vh",
        padding: "7rem 2rem",
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? "linear-gradient(160deg, #0c0a05 0%, #150f06 60%, #0c0a05 100%)"
          : "linear-gradient(160deg, #ede0c0 0%, #f0e6cc 60%, #ede0c0 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: isDark ? 0.025 : 0.02,
        }}
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="edu-pattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill={gold} />
              <rect
                x="0"
                y="0"
                width="60"
                height="60"
                fill="none"
                stroke={gold}
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#edu-pattern)" />
        </svg>
      </div>

      {/* Right pillar */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background: isDark
            ? "linear-gradient(180deg, transparent, rgba(201,168,76,0.12), transparent)"
            : "linear-gradient(180deg, transparent, rgba(139,105,20,0.1), transparent)",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle
            title="Foundations of Knowledge"
            subtitle="Education"
            isDark={isDark}
          />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {education.map((item, i) => (
            <EducationCard key={i} item={item} index={i} isDark={isDark} />
          ))}
        </div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
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

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 700px) {
          .edu-row {
            grid-template-columns: 40px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
