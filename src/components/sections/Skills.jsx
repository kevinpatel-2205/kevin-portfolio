import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useTheme } from "../../context/ThemeContext";
import { skills } from "../../data/portfolioData";

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

const levelWidth = {
  Expert: "95%",
  Advanced: "78%",
  Intermediate: "58%",
  Beginner: "35%",
};
const levelColor = {
  Expert: "#C9A84C",
  Advanced: "#8B6914",
  Intermediate: "#6B4423",
  Beginner: "#4a3520",
};

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

const SkillCard = ({ skill, isDark, index }) => {
  const [hovered, setHovered] = useState(false);
  const gold = "#C9A84C";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "1.4rem",
        borderRadius: "4px",
        border: hovered
          ? `1px solid rgba(201,168,76,0.5)`
          : `1px solid rgba(201,168,76,0.12)`,
        background: hovered
          ? isDark
            ? "rgba(201,168,76,0.07)"
            : "rgba(201,168,76,0.1)"
          : isDark
            ? "rgba(201,168,76,0.02)"
            : "rgba(201,168,76,0.04)",
        cursor: "default",
        transition: "all 0.35s ease",
        boxShadow: hovered
          ? isDark
            ? "0 8px 32px rgba(201,168,76,0.12), 0 0 0 1px rgba(201,168,76,0.1)"
            : "0 8px 24px rgba(201,168,76,0.15)"
          : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corner accent */}
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

      {/* Icon + Name row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "1rem",
        }}
      >
        <motion.div
          animate={
            hovered ? { scale: 1.12, rotate: 5 } : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.3 }}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "4px",
            border: `1px solid rgba(201,168,76,0.2)`,
            background: isDark
              ? "rgba(201,168,76,0.06)"
              : "rgba(201,168,76,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: hovered ? `0 0 18px rgba(201,168,76,0.2)` : "none",
            transition: "box-shadow 0.3s",
          }}
        >
          <img
            src={skill.icon}
            alt={skill.name}
            style={{ width: "26px", height: "26px", objectFit: "contain" }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </motion.div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: "700",
              fontSize: "0.95rem",
              color: hovered
                ? gold
                : isDark
                  ? "rgba(220,200,150,0.9)"
                  : "rgba(60,40,10,0.85)",
              transition: "color 0.3s",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {skill.name}
          </div>
          <div
            style={{
              fontFamily: "'Crimson Text', Georgia, serif",
              fontSize: "0.72rem",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: isDark ? "rgba(201,168,76,0.45)" : "rgba(139,105,20,0.5)",
              marginTop: "2px",
            }}
          >
            {skill.level}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: "3px",
          borderRadius: "2px",
          background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: levelWidth[skill.level] || "50%" }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: index * 0.06 + 0.2,
          }}
          style={{
            height: "100%",
            background: `linear-gradient(90deg, ${levelColor[skill.level] || gold}, ${gold})`,
            borderRadius: "2px",
            boxShadow: hovered ? `0 0 8px ${gold}60` : "none",
            transition: "box-shadow 0.3s",
          }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { isDark } = useTheme();
  const { ref, inView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("All");
  const gold = "#C9A84C";

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
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
      {/* Background geometric pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: isDark ? 0.025 : 0.02,
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="heritage-grid"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="80"
                height="80"
                fill="none"
                stroke={gold}
                strokeWidth="0.5"
              />
              <circle cx="40" cy="40" r="3" fill={gold} opacity="0.5" />
              <line
                x1="40"
                y1="0"
                x2="40"
                y2="80"
                stroke={gold}
                strokeWidth="0.3"
                opacity="0.5"
              />
              <line
                x1="0"
                y1="40"
                x2="80"
                y2="40"
                stroke={gold}
                strokeWidth="0.3"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heritage-grid)" />
        </svg>
      </div>

      {/* Right edge pillar */}
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

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle
            title="Arsenal of Craft"
            subtitle="Skills & Expertise"
            isDark={isDark}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.7rem",
            marginBottom: "3.5rem",
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 22px",
                borderRadius: "3px",
                border:
                  activeCategory === cat
                    ? `1px solid ${gold}`
                    : `1px solid rgba(201,168,76,0.2)`,
                background:
                  activeCategory === cat
                    ? isDark
                      ? "rgba(201,168,76,0.12)"
                      : "rgba(201,168,76,0.15)"
                    : "transparent",
                color:
                  activeCategory === cat
                    ? gold
                    : isDark
                      ? "rgba(201,168,76,0.5)"
                      : "rgba(139,105,20,0.55)",
                fontFamily: "'Crimson Text', Georgia, serif",
                fontSize: "0.9rem",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow:
                  activeCategory === cat
                    ? `0 0 20px rgba(201,168,76,0.15)`
                    : "none",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skill count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
          style={{
            textAlign: "center",
            fontFamily: "'Crimson Text', Georgia, serif",
            fontSize: "0.82rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: isDark ? "rgba(201,168,76,0.35)" : "rgba(139,105,20,0.4)",
            marginBottom: "2.5rem",
          }}
        >
          Showing {filtered.length} skill{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </motion.p>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {filtered.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                isDark={isDark}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
            marginTop: "4rem",
            padding: "1.5rem",
            border: `1px solid rgba(201,168,76,0.1)`,
            borderRadius: "4px",
            background: isDark
              ? "rgba(201,168,76,0.02)"
              : "rgba(201,168,76,0.04)",
          }}
        >
          {Object.entries(levelWidth).map(([level, width]) => (
            <div
              key={level}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "3px",
                  borderRadius: "2px",
                  background: `linear-gradient(90deg, ${levelColor[level]}, ${gold})`,
                }}
              />
              <span
                style={{
                  fontFamily: "'Crimson Text', Georgia, serif",
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: isDark
                    ? "rgba(201,168,76,0.5)"
                    : "rgba(139,105,20,0.55)",
                }}
              >
                {level} — {width}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
