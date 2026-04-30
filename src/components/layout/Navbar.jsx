import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { personalInfo } from "../../data/portfolioData";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const gold = "#C9A84C";
  const darkBg = "rgba(10,8,4,0.93)";
  const lightBg = "rgba(245,235,210,0.95)";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? (isDark ? darkBg : lightBg) : "transparent",
          borderBottom: scrolled
            ? `1px solid ${isDark ? "rgba(201,168,76,0.2)" : "rgba(139,105,20,0.15)"}`
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "all 0.4s ease",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            onClick={() => handleNav("#home")}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* Heritage emblem */}
            <div
              style={{
                width: "40px",
                height: "40px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <polygon
                  points="20,2 24,14 38,14 27,22 31,36 20,28 9,36 13,22 2,14 16,14"
                  fill="none"
                  stroke={gold}
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                <circle cx="20" cy="20" r="6" fill={gold} opacity="0.2" />
                <text
                  x="20"
                  y="24"
                  textAnchor="middle"
                  fontFamily="Playfair Display, Georgia, serif"
                  fontSize="10"
                  fontWeight="700"
                  fill={gold}
                >
                  K
                </text>
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: "700",
                  fontSize: "1.15rem",
                  color: gold,
                  letterSpacing: "0.5px",
                  lineHeight: 1.1,
                }}
              >
                {personalInfo.name}
              </div>
              <div
                style={{
                  fontFamily: "'Crimson Text', Georgia, serif",
                  fontSize: "0.7rem",
                  color: isDark
                    ? "rgba(201,168,76,0.5)"
                    : "rgba(139,105,20,0.6)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Portfolio
              </div>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div
            className="nav-desktop"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.8rem",
            }}
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                whileHover={{ y: -1 }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Crimson Text', Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: active === link.href ? "600" : "400",
                  color:
                    active === link.href
                      ? gold
                      : isDark
                        ? "rgba(210,195,160,0.75)"
                        : "rgba(80,60,20,0.75)",
                  position: "relative",
                  padding: "4px 0",
                  letterSpacing: "0.5px",
                  transition: "color 0.3s",
                }}
              >
                {link.label}
                {active === link.href && (
                  <motion.div
                    layoutId="activeLink"
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: gold,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 20 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: `1px solid ${isDark ? "rgba(201,168,76,0.35)" : "rgba(139,105,20,0.3)"}`,
                background: isDark
                  ? "rgba(201,168,76,0.08)"
                  : "rgba(139,105,20,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: gold,
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-hamburger"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "6px",
                border: `1px solid ${isDark ? "rgba(201,168,76,0.3)" : "rgba(139,105,20,0.25)"}`,
                background: "none",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: gold,
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "fixed",
              top: "68px",
              left: 0,
              right: 0,
              zIndex: 999,
              background: isDark
                ? "rgba(10,8,4,0.97)"
                : "rgba(245,235,210,0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: `1px solid rgba(201,168,76,0.2)`,
              padding: "1.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.1rem",
                  color:
                    active === link.href
                      ? gold
                      : isDark
                        ? "rgba(210,195,160,0.8)"
                        : "rgba(80,60,20,0.8)",
                  textAlign: "left",
                  padding: "8px 0",
                  borderBottom: `1px solid rgba(201,168,76,0.1)`,
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
