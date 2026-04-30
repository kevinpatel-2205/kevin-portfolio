import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useTheme } from "../../context/ThemeContext";
import { projects } from "../../data/portfolioData";
import { ExternalLink, GitGraph, X, ChevronRight } from "lucide-react";

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

/* ── Preview Modal ── */
const PreviewModal = ({ project, isDark, onClose }) => {
  const gold = "#C9A84C";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "800px",
          background: isDark ? "#100c05" : "#f5ead2",
          border: `1px solid rgba(201,168,76,0.3)`,
          borderRadius: "6px",
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
        }}
      >
        {/* Image */}
        <div
          style={{ position: "relative", height: "320px", overflow: "hidden" }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: isDark
                  ? "linear-gradient(135deg, #150f06, #1e1508)"
                  : "linear-gradient(135deg, #e8d5a3, #d4b870)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "4rem",
                color: gold,
                opacity: 0.4,
              }}
            >
              {project.title[0]}
            </div>
          )}
          {/* Overlay gradient */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: isDark
                ? "linear-gradient(transparent, #100c05)"
                : "linear-gradient(transparent, #f5ead2)",
            }}
          />
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: `1px solid rgba(201,168,76,0.4)`,
              background: isDark ? "rgba(10,8,4,0.9)" : "rgba(245,235,210,0.9)",
              color: gold,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "2rem" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.6rem",
              fontWeight: "800",
              color: gold,
              marginBottom: "0.8rem",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "'Crimson Text', Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: isDark ? "rgba(210,190,140,0.75)" : "rgba(80,55,15,0.7)",
              marginBottom: "1.5rem",
            }}
          >
            {project.description}
          </p>

          {/* Tech stack */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "1.8rem",
            }}
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "4px 12px",
                  border: `1px solid rgba(201,168,76,0.3)`,
                  borderRadius: "3px",
                  fontFamily: "'Crimson Text', Georgia, serif",
                  fontSize: "0.82rem",
                  letterSpacing: "1px",
                  color: gold,
                  background: isDark
                    ? "rgba(201,168,76,0.06)"
                    : "rgba(201,168,76,0.08)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "1rem" }}>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "10px 22px",
                  borderRadius: "3px",
                  border: `1px solid ${gold}`,
                  background: isDark
                    ? "rgba(201,168,76,0.1)"
                    : "rgba(201,168,76,0.12)",
                  color: gold,
                  textDecoration: "none",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "0.88rem",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                }}
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "10px 22px",
                  borderRadius: "3px",
                  border: `1px solid rgba(201,168,76,0.25)`,
                  background: "transparent",
                  color: isDark
                    ? "rgba(210,190,140,0.8)"
                    : "rgba(80,55,15,0.75)",
                  textDecoration: "none",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "0.88rem",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                }}
              >
                <GitGraph size={15} /> GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ── Project Card ── */
const ProjectCard = ({ project, index, isDark, onPreview }) => {
  const [hovered, setHovered] = useState(false);
  const gold = "#C9A84C";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "4px",
        border: hovered
          ? `1px solid rgba(201,168,76,0.45)`
          : `1px solid rgba(201,168,76,0.12)`,
        background: isDark
          ? hovered
            ? "rgba(201,168,76,0.05)"
            : "rgba(201,168,76,0.02)"
          : hovered
            ? "rgba(201,168,76,0.09)"
            : "rgba(201,168,76,0.04)",
        overflow: "hidden",
        transition: "all 0.35s ease",
        boxShadow: hovered
          ? isDark
            ? "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.08)"
            : "0 16px 40px rgba(0,0,0,0.12)"
          : "none",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Image */}
      <div
        style={{
          height: "200px",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
        }}
        onClick={() => onPreview(project)}
      >
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.5 }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: isDark
                ? "linear-gradient(135deg, #150f06, #1e1508)"
                : "linear-gradient(135deg, #e8d5a3, #d4b870)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "3.5rem",
              color: gold,
              opacity: 0.35,
            }}
          >
            {project.title[0]}
          </div>
        )}

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontFamily: "'Crimson Text', Georgia, serif",
            color: gold,
            fontSize: "0.9rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <ChevronRight size={16} /> Preview
        </motion.div>

        {/* Gradient fade bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: isDark
              ? "linear-gradient(transparent, rgba(15,11,5,0.9))"
              : "linear-gradient(transparent, rgba(240,230,200,0.85))",
            pointerEvents: "none",
          }}
        />

        {/* Project logo */}
        {project.logo && (
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "14px",
              width: "36px",
              height: "36px",
              borderRadius: "4px",
              border: `1px solid rgba(201,168,76,0.3)`,
              background: isDark
                ? "rgba(10,8,4,0.85)"
                : "rgba(245,235,210,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={project.logo}
              alt=""
              style={{ width: "24px", height: "24px", objectFit: "contain" }}
            />
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: "1.4rem" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.1rem",
            fontWeight: "700",
            color: hovered
              ? gold
              : isDark
                ? "rgba(220,200,150,0.92)"
                : "rgba(60,40,10,0.88)",
            marginBottom: "0.6rem",
            transition: "color 0.3s",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontFamily: "'Crimson Text', Georgia, serif",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            color: isDark ? "rgba(210,190,140,0.6)" : "rgba(80,55,15,0.6)",
            marginBottom: "1.1rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: "1.2rem",
          }}
        >
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              style={{
                padding: "3px 10px",
                border: `1px solid rgba(201,168,76,0.22)`,
                borderRadius: "3px",
                fontFamily: "'Crimson Text', Georgia, serif",
                fontSize: "0.75rem",
                letterSpacing: "0.8px",
                color: isDark ? "rgba(201,168,76,0.7)" : "rgba(139,105,20,0.7)",
                background: isDark
                  ? "rgba(201,168,76,0.04)"
                  : "rgba(201,168,76,0.06)",
              }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span
              style={{
                padding: "3px 10px",
                fontFamily: "'Crimson Text', Georgia, serif",
                fontSize: "0.75rem",
                color: isDark
                  ? "rgba(201,168,76,0.4)"
                  : "rgba(139,105,20,0.45)",
              }}
            >
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(90deg, rgba(201,168,76,0.2), transparent)`,
            marginBottom: "1.1rem",
          }}
        />

        {/* Links */}
        <div style={{ display: "flex", gap: "0.8rem" }}>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "7px 16px",
                borderRadius: "3px",
                border: `1px solid rgba(201,168,76,0.35)`,
                background: isDark
                  ? "rgba(201,168,76,0.07)"
                  : "rgba(201,168,76,0.09)",
                color: gold,
                textDecoration: "none",
                fontFamily: "'Crimson Text', Georgia, serif",
                fontSize: "0.85rem",
                fontWeight: "600",
                transition: "all 0.25s",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <ExternalLink size={13} /> Live
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "7px 16px",
                borderRadius: "3px",
                border: `1px solid rgba(201,168,76,0.18)`,
                background: "transparent",
                color: isDark ? "rgba(210,190,140,0.7)" : "rgba(80,55,15,0.65)",
                textDecoration: "none",
                fontFamily: "'Crimson Text', Georgia, serif",
                fontSize: "0.85rem",
                fontWeight: "600",
                transition: "all 0.25s",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <GitGraph size={13} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ── Main Section ── */
const Projects = () => {
  const { isDark } = useTheme();
  const { ref, inView } = useScrollAnimation();
  const [preview, setPreview] = useState(null);
  const gold = "#C9A84C";

  return (
    <section
      id="projects"
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
      {/* Background arch pair */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          opacity: isDark ? 0.035 : 0.03,
          pointerEvents: "none",
        }}
      >
        <svg width="450" height="500" viewBox="0 0 450 500">
          <g fill="none" stroke={gold} strokeWidth="1.5">
            <path d="M50,500 L50,250 Q50,50 225,50 Q400,50 400,250 L400,500" />
            <path d="M100,500 L100,270 Q100,120 225,120 Q350,120 350,270 L350,500" />
            <path d="M150,500 L150,290 Q150,180 225,180 Q300,180 300,290 L300,500" />
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

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle
            title="Works of Craft"
            subtitle="Featured Projects"
            isDark={isDark}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isDark={isDark}
              onPreview={setPreview}
            />
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            textAlign: "center",
            marginTop: "3.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: isDark ? "rgba(201,168,76,0.3)" : "rgba(139,105,20,0.35)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "currentColor",
              }}
            />
            <span
              style={{
                fontFamily: "'Crimson Text', Georgia, serif",
                fontSize: "0.8rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              More on GitHub
            </span>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "currentColor",
              }}
            />
          </div>

          <a
            href="https://github.com/kevin"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 28px",
              borderRadius: "3px",
              border: `1px solid rgba(201,168,76,0.28)`,
              background: isDark
                ? "rgba(201,168,76,0.04)"
                : "rgba(201,168,76,0.07)",
              color: gold,
              textDecoration: "none",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "0.9rem",
              fontWeight: "600",
              letterSpacing: "0.5px",
              transition: "all 0.3s",
            }}
          >
            <GitGraph size={16} />
            View All Projects
          </a>
        </motion.div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {preview && (
          <PreviewModal
            project={preview}
            isDark={isDark}
            onClose={() => setPreview(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
