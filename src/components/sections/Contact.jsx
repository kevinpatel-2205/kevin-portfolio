import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useTheme } from "../../context/ThemeContext";
import { personalInfo, socialLinks } from "../../data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  GitGraph,
  Link,
  CircleFadingPlus,
  ExternalLink,
} from "lucide-react";

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

const socialIcons = {
  linkedin: Link,
  github: GitGraph,
  instagram: CircleFadingPlus,
  snapchat: ExternalLink,
};

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  isDark,
  multiline,
}) => {
  const [focused, setFocused] = useState(false);
  const gold = "#C9A84C";

  const baseStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "3px",
    border: focused
      ? `1px solid rgba(201,168,76,0.6)`
      : `1px solid rgba(201,168,76,0.18)`,
    background: focused
      ? isDark
        ? "rgba(201,168,76,0.06)"
        : "rgba(201,168,76,0.08)"
      : isDark
        ? "rgba(201,168,76,0.02)"
        : "rgba(201,168,76,0.04)",
    color: isDark ? "rgba(220,200,150,0.92)" : "rgba(60,40,10,0.88)",
    fontFamily: "'Crimson Text', Georgia, serif",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
    resize: multiline ? "vertical" : "none",
    boxShadow: focused ? `0 0 0 3px rgba(201,168,76,0.08)` : "none",
    caretColor: gold,
  };

  return (
    <div style={{ marginBottom: "1.2rem" }}>
      <label
        style={{
          display: "block",
          fontFamily: "'Crimson Text', Georgia, serif",
          fontSize: "0.78rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: focused
            ? gold
            : isDark
              ? "rgba(201,168,76,0.5)"
              : "rgba(139,105,20,0.55)",
          marginBottom: "6px",
          transition: "color 0.3s",
        }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
          placeholder={`Enter your ${label.toLowerCase()}...`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
          placeholder={`Enter your ${label.toLowerCase()}...`}
        />
      )}
    </div>
  );
};

const Contact = () => {
  const { isDark } = useTheme();
  const { ref, inView } = useScrollAnimation();
  const gold = "#C9A84C";

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <>
      <section
        id="contact"
        style={{
          minHeight: "100vh",
          padding: "7rem 2rem 4rem",
          position: "relative",
          overflow: "hidden",
          background: isDark
            ? "linear-gradient(160deg, #0c0a05 0%, #150f06 60%, #0c0a05 100%)"
            : "linear-gradient(160deg, #ede0c0 0%, #f0e6cc 60%, #ede0c0 100%)",
        }}
      >
        {/* Background arch */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            opacity: isDark ? 0.035 : 0.028,
            pointerEvents: "none",
          }}
        >
          <svg width="400" height="460" viewBox="0 0 400 460">
            <g fill="none" stroke={gold} strokeWidth="1.5">
              <path d="M60,460 L60,220 Q60,50 200,50 Q340,50 340,220 L340,460" />
              <path d="M100,460 L100,240 Q100,120 200,120 Q300,120 300,240 L300,460" />
              <path d="M140,460 L140,260 Q140,175 200,175 Q260,175 260,260 L260,460" />
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

        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              title="Open a Correspondence"
              subtitle="Contact Me"
              isDark={isDark}
            />
          </motion.div>

          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* LEFT — Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
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
                    fontSize: "0.78rem",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: gold,
                    opacity: 0.75,
                  }}
                >
                  Get In Touch
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.3rem, 2.2vw, 1.7rem)",
                  fontWeight: "700",
                  color: isDark
                    ? "rgba(220,200,150,0.92)"
                    : "rgba(60,40,10,0.88)",
                  marginBottom: "1rem",
                  lineHeight: 1.35,
                }}
              >
                Let's build something{" "}
                <span style={{ color: gold, fontStyle: "italic" }}>
                  remarkable
                </span>{" "}
                together
              </h3>

              <p
                style={{
                  fontFamily: "'Crimson Text', Georgia, serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.85,
                  color: isDark
                    ? "rgba(210,190,140,0.65)"
                    : "rgba(80,55,15,0.62)",
                  marginBottom: "2.5rem",
                }}
              >
                Whether you have a project in mind, a question to ask, or simply
                want to connect — my correspondence is always open. I will
                endeavour to reply at the earliest.
              </p>

              {/* Contact info items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginBottom: "2.5rem",
                }}
              >
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 4 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "12px 16px",
                      border: `1px solid rgba(201,168,76,0.12)`,
                      borderRadius: "4px",
                      background: isDark
                        ? "rgba(201,168,76,0.02)"
                        : "rgba(201,168,76,0.04)",
                      textDecoration: "none",
                      cursor: href ? "pointer" : "default",
                    }}
                    as={href ? "a" : "div"}
                    href={href || undefined}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        border: `1px solid rgba(201,168,76,0.25)`,
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
                          fontFamily: "'Crimson Text', Georgia, serif",
                          fontSize: "0.72rem",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          color: isDark
                            ? "rgba(201,168,76,0.45)"
                            : "rgba(139,105,20,0.5)",
                          marginBottom: "2px",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Crimson Text', Georgia, serif",
                          fontSize: "0.97rem",
                          fontWeight: "600",
                          color: isDark
                            ? "rgba(220,200,150,0.85)"
                            : "rgba(60,40,10,0.82)",
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p
                  style={{
                    fontFamily: "'Crimson Text', Georgia, serif",
                    fontSize: "0.75rem",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: isDark
                      ? "rgba(201,168,76,0.4)"
                      : "rgba(139,105,20,0.45)",
                    marginBottom: "1rem",
                  }}
                >
                  Find me on
                </p>
                <div
                  style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}
                >
                  {socialLinks.map((social) => {
                    const Icon = socialIcons[social.icon] || ExternalLink;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{
                          scale: 1.12,
                          y: -4,
                          boxShadow: `0 8px 24px rgba(201,168,76,0.25)`,
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          width: "46px",
                          height: "46px",
                          borderRadius: "4px",
                          border: `1px solid rgba(201,168,76,0.25)`,
                          background: isDark
                            ? "rgba(201,168,76,0.05)"
                            : "rgba(201,168,76,0.07)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: gold,
                          textDecoration: "none",
                          transition: "border-color 0.3s",
                        }}
                        title={social.name}
                      >
                        <Icon size={18} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div
                style={{
                  padding: "2.5rem",
                  borderRadius: "4px",
                  border: `1px solid rgba(201,168,76,0.15)`,
                  background: isDark
                    ? "rgba(201,168,76,0.02)"
                    : "rgba(201,168,76,0.05)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Corner accents */}
                {[
                  {
                    top: 0,
                    left: 0,
                    borderRight: "1px solid rgba(201,168,76,0.25)",
                    borderBottom: "1px solid rgba(201,168,76,0.25)",
                    borderBottomRightRadius: "4px",
                  },
                  {
                    top: 0,
                    right: 0,
                    borderLeft: "1px solid rgba(201,168,76,0.25)",
                    borderBottom: "1px solid rgba(201,168,76,0.25)",
                    borderBottomLeftRadius: "4px",
                  },
                  {
                    bottom: 0,
                    left: 0,
                    borderRight: "1px solid rgba(201,168,76,0.25)",
                    borderTop: "1px solid rgba(201,168,76,0.25)",
                    borderTopRightRadius: "4px",
                  },
                  {
                    bottom: 0,
                    right: 0,
                    borderLeft: "1px solid rgba(201,168,76,0.25)",
                    borderTop: "1px solid rgba(201,168,76,0.25)",
                    borderTopLeftRadius: "4px",
                  },
                ].map((style, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "30px",
                      height: "30px",
                      ...style,
                    }}
                  />
                ))}

                <h4
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.15rem",
                    fontWeight: "700",
                    color: isDark
                      ? "rgba(220,200,150,0.9)"
                      : "rgba(60,40,10,0.85)",
                    marginBottom: "1.8rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "1px",
                      background: gold,
                      opacity: 0.5,
                    }}
                  />
                  Send a Message
                  <div
                    style={{
                      width: "20px",
                      height: "1px",
                      background: gold,
                      opacity: 0.5,
                    }}
                  />
                </h4>

                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0 1rem",
                    }}
                    className="form-row"
                  >
                    <InputField
                      label="Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      isDark={isDark}
                    />
                    <InputField
                      label="Email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      isDark={isDark}
                    />
                  </div>
                  <InputField
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    isDark={isDark}
                  />
                  <InputField
                    label="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    isDark={isDark}
                    multiline
                  />

                  {/* Status messages */}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: "10px 16px",
                        borderRadius: "3px",
                        border: `1px solid rgba(201,168,76,0.35)`,
                        background: isDark
                          ? "rgba(201,168,76,0.08)"
                          : "rgba(201,168,76,0.1)",
                        color: gold,
                        fontFamily: "'Crimson Text', Georgia, serif",
                        fontSize: "0.95rem",
                        marginBottom: "1rem",
                        textAlign: "center",
                      }}
                    >
                      ✦ Message dispatched successfully. I shall respond soon.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: "10px 16px",
                        borderRadius: "3px",
                        border: `1px solid rgba(180,60,60,0.35)`,
                        background: isDark
                          ? "rgba(180,60,60,0.08)"
                          : "rgba(180,60,60,0.07)",
                        color: isDark
                          ? "rgba(255,160,140,0.9)"
                          : "rgba(160,40,40,0.85)",
                        fontFamily: "'Crimson Text', Georgia, serif",
                        fontSize: "0.95rem",
                        marginBottom: "1rem",
                        textAlign: "center",
                      }}
                    >
                      ✦ Please fill in Name, Email and Message fields.
                    </motion.div>
                  )}

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={
                      !sending
                        ? {
                            scale: 1.02,
                            boxShadow: `0 8px 28px rgba(201,168,76,0.3)`,
                          }
                        : {}
                    }
                    whileTap={!sending ? { scale: 0.98 } : {}}
                    style={{
                      width: "100%",
                      padding: "13px 28px",
                      borderRadius: "3px",
                      border: `1px solid ${gold}`,
                      background: isDark
                        ? "rgba(201,168,76,0.1)"
                        : "rgba(201,168,76,0.13)",
                      color: gold,
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: "700",
                      fontSize: "0.95rem",
                      letterSpacing: "1px",
                      cursor: sending ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      opacity: sending ? 0.7 : 1,
                      transition: "all 0.3s",
                    }}
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{
                            width: "16px",
                            height: "16px",
                            border: `2px solid rgba(201,168,76,0.3)`,
                            borderTop: `2px solid ${gold}`,
                            borderRadius: "50%",
                          }}
                        />
                        Dispatching...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Dispatch Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          .contact-grid { grid-template-columns: 1fr 1.4fr; }
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
            .form-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          background: isDark ? "#070503" : "#e8d9b5",
          borderTop: `1px solid rgba(201,168,76,0.15)`,
          padding: "2.5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          {/* Ornament */}
          <svg width="120" height="16" viewBox="0 0 120 16">
            <line
              x1="0"
              y1="8"
              x2="42"
              y2="8"
              stroke={gold}
              strokeWidth="1"
              opacity="0.3"
            />
            <polygon points="50,8 54,4 58,8 54,12" fill={gold} opacity="0.5" />
            <circle cx="60" cy="8" r="3" fill={gold} opacity="0.6" />
            <polygon points="62,8 66,4 70,8 66,12" fill={gold} opacity="0.5" />
            <line
              x1="78"
              y1="8"
              x2="120"
              y2="8"
              stroke={gold}
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>

          {/* Name */}
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.1rem",
              fontWeight: "700",
              color: gold,
              letterSpacing: "1px",
            }}
          >
            {personalInfo.name}
          </p>

          {/* Nav links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            {[
              "home",
              "about",
              "skills",
              "projects",
              "education",
              "experience",
              "contact",
            ].map((id) => (
              <button
                key={id}
                onClick={() =>
                  document
                    .querySelector(`#${id}`)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Crimson Text', Georgia, serif",
                  fontSize: "0.85rem",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: isDark
                    ? "rgba(201,168,76,0.45)"
                    : "rgba(139,105,20,0.5)",
                  transition: "color 0.3s",
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.target.style.color = gold)}
                onMouseLeave={(e) =>
                  (e.target.style.color = isDark
                    ? "rgba(201,168,76,0.45)"
                    : "rgba(139,105,20,0.5)")
                }
              >
                {id}
              </button>
            ))}
          </div>

          {/* Bottom line */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background: `linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)`,
            }}
          />

          <p
            style={{
              fontFamily: "'Crimson Text', Georgia, serif",
              fontSize: "0.85rem",
              color: isDark ? "rgba(201,168,76,0.3)" : "rgba(139,105,20,0.4)",
              letterSpacing: "0.5px",
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} {personalInfo.name} · Crafted with
            Heritage & Code
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
