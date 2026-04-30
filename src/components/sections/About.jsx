import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useTheme } from "../../context/ThemeContext";
import { personalInfo } from "../../data/portfolioData";
import { MapPin, Mail, Phone, User } from "lucide-react";

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
      {/* Ornamental divider */}
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

const InfoCard = ({ icon: Icon, label, value, isDark }) => {
  const gold = "#C9A84C";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 16px",
        border: `1px solid rgba(201,168,76,0.15)`,
        borderRadius: "4px",
        background: isDark ? "rgba(201,168,76,0.04)" : "rgba(201,168,76,0.06)",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: `1px solid rgba(201,168,76,0.3)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: gold,
          flexShrink: 0,
        }}
      >
        <Icon size={16} />
      </div>
      <div>
        <p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: isDark ? "rgba(201,168,76,0.5)" : "rgba(139,105,20,0.5)",
            fontFamily: "'Crimson Text', Georgia, serif",
            marginBottom: "2px",
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: isDark ? "rgba(220,200,150,0.9)" : "rgba(60,40,10,0.85)",
            fontFamily: "'Crimson Text', Georgia, serif",
            fontWeight: "600",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  const { isDark } = useTheme();
  const { ref: leftRef, inView: leftIn } = useScrollAnimation();
  const { ref: rightRef, inView: rightIn } = useScrollAnimation();

  const gold = "#C9A84C";

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "7rem 2rem",
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? "linear-gradient(160deg, #0a0804 0%, #100c05 60%, #0a0804 100%)"
          : "linear-gradient(160deg, #f0e6cc 0%, #e8d9b5 60%, #f0e6cc 100%)",
      }}
    >
      {/* Background arch decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          opacity: isDark ? 0.04 : 0.035,
          pointerEvents: "none",
        }}
      >
        <svg width="500" height="600" viewBox="0 0 500 600">
          <g fill="none" stroke={gold} strokeWidth="1.5">
            <path d="M100,600 L100,280 Q100,80 300,80 Q500,80 500,280 L500,600" />
            <path d="M150,600 L150,300 Q150,150 300,150 Q450,150 450,300 L450,600" />
            <path d="M200,600 L200,320 Q200,200 300,200 Q400,200 400,320 L400,600" />
          </g>
        </svg>
      </div>

      {/* Left edge pillar */}
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
        <SectionTitle
          title="The Craftsman Behind the Code"
          subtitle="About Me"
          isDark={isDark}
        />

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* LEFT — Profile Image */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={leftIn ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Outer decorative border */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                right: "-20px",
                bottom: "-20px",
                border: `1px solid rgba(201,168,76,0.15)`,
                borderRadius: "4px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-10px",
                left: "-10px",
                right: "-10px",
                bottom: "-10px",
                border: `1px solid rgba(201,168,76,0.1)`,
                borderRadius: "4px",
              }}
            />

            {/* Corner ornaments */}
            {[
              { top: "-22px", left: "-22px" },
              { top: "-22px", right: "-22px" },
              { bottom: "-22px", left: "-22px" },
              { bottom: "-22px", right: "-22px" },
            ].map((pos, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  ...pos,
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: gold,
                  opacity: 0.6,
                  zIndex: 2,
                }}
              />
            ))}

            {/* Image */}
            <div
              style={{
                width: "100%",
                maxWidth: "340px",
                aspectRatio: "3/4",
                borderRadius: "4px",
                overflow: "hidden",
                border: `2px solid rgba(201,168,76,0.35)`,
                position: "relative",
                boxShadow: isDark
                  ? "0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(201,168,76,0.08)"
                  : "0 30px 60px rgba(0,0,0,0.15), 0 0 30px rgba(201,168,76,0.1)",
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
                      ? "linear-gradient(160deg, #150f06 0%, #1e1508 100%)"
                      : "linear-gradient(160deg, #e8d5a3 0%, #d4b870 100%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                  }}
                >
                  {/* Decorative arch SVG as placeholder */}
                  <svg width="120" height="140" viewBox="0 0 120 140">
                    <g
                      fill="none"
                      stroke={gold}
                      strokeWidth="1.5"
                      opacity="0.5"
                    >
                      <path d="M20,140 L20,70 Q20,10 60,10 Q100,10 100,70 L100,140" />
                      <path d="M35,140 L35,80 Q35,30 60,30 Q85,30 85,80 L85,140" />
                    </g>
                    <text
                      x="60"
                      y="90"
                      textAnchor="middle"
                      fontFamily="'Playfair Display', Georgia, serif"
                      fontSize="42"
                      fontWeight="800"
                      fill={gold}
                      opacity="0.7"
                    >
                      K
                    </text>
                  </svg>
                  <p
                    style={{
                      fontFamily: "'Crimson Text', Georgia, serif",
                      color: gold,
                      opacity: 0.5,
                      fontSize: "0.75rem",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                    }}
                  >
                    Add Your Photo
                  </p>
                </div>
              )}

              {/* Image overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: isDark
                    ? "linear-gradient(transparent, rgba(10,8,4,0.5))"
                    : "linear-gradient(transparent, rgba(240,230,204,0.4))",
                }}
              />
            </div>

            {/* Years badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={leftIn ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: "20px",
                right: "0px",
                background: isDark ? "#150f06" : "#f5ead2",
                border: `1px solid rgba(201,168,76,0.4)`,
                borderRadius: "4px",
                padding: "14px 20px",
                textAlign: "center",
                boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "2rem",
                  fontWeight: "800",
                  color: gold,
                  lineHeight: 1,
                }}
              >
                3+
              </div>
              <div
                style={{
                  fontFamily: "'Crimson Text', Georgia, serif",
                  fontSize: "0.75rem",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: isDark
                    ? "rgba(201,168,76,0.6)"
                    : "rgba(139,105,20,0.6)",
                  marginTop: "4px",
                }}
              >
                Years of
                <br />
                Experience
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Text Content */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={rightIn ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          >
            {/* Intro label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "1.2rem",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  background: gold,
                  opacity: 0.5,
                }}
              />
              <span
                style={{
                  fontFamily: "'Crimson Text', Georgia, serif",
                  fontSize: "0.8rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: gold,
                  opacity: 0.75,
                }}
              >
                Introduction
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: "700",
                color: isDark ? "rgba(220,200,150,0.95)" : "rgba(60,40,10,0.9)",
                marginBottom: "1.5rem",
                lineHeight: 1.3,
              }}
            >
              Building modern experiences
              <br />
              <span style={{ color: gold, fontStyle: "italic" }}>
                rooted in craftsmanship
              </span>
            </h3>

            <p
              style={{
                fontFamily: "'Crimson Text', Georgia, serif",
                fontSize: "1.1rem",
                color: isDark ? "rgba(210,190,140,0.7)" : "rgba(80,55,15,0.65)",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              {personalInfo.about}
            </p>

            {/* Divider */}
            <div
              style={{
                width: "60px",
                height: "1px",
                background: `linear-gradient(90deg, ${gold}, transparent)`,
                marginBottom: "2rem",
                opacity: 0.5,
              }}
            />

            {/* Info Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.8rem",
                marginBottom: "2.5rem",
              }}
            >
              <InfoCard
                icon={User}
                label="Name"
                value={personalInfo.name}
                isDark={isDark}
              />
              <InfoCard
                icon={MapPin}
                label="Location"
                value={personalInfo.location}
                isDark={isDark}
              />
              <InfoCard
                icon={Mail}
                label="Email"
                value={personalInfo.email}
                isDark={isDark}
              />
              <InfoCard
                icon={Phone}
                label="Phone"
                value={personalInfo.phone}
                isDark={isDark}
              />
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                padding: "1.5rem",
                border: `1px solid rgba(201,168,76,0.12)`,
                borderRadius: "4px",
                background: isDark
                  ? "rgba(201,168,76,0.03)"
                  : "rgba(201,168,76,0.05)",
              }}
            >
              {[
                { num: "15+", label: "Projects Completed" },
                { num: "3+", label: "Years Experience" },
                { num: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center", flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.8rem",
                      fontWeight: "800",
                      color: gold,
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Crimson Text', Georgia, serif",
                      fontSize: "0.78rem",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: isDark
                        ? "rgba(201,168,76,0.5)"
                        : "rgba(139,105,20,0.55)",
                      marginTop: "6px",
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr 1.2fr;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 480px) {
          .info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
