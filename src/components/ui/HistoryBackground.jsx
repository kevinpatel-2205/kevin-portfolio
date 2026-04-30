import { motion } from "framer-motion";

const HistoryBackground = ({ isDark }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Mughal arch — top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          opacity: isDark ? 0.06 : 0.05,
        }}
      >
        <svg
          width="420"
          height="420"
          viewBox="0 0 420 420"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            stroke={isDark ? "#C9A84C" : "#8B6914"}
            strokeWidth="1.5"
          >
            {/* Outer arch */}
            <path d="M60,420 L60,200 Q60,60 210,60 Q360,60 360,200 L360,420" />
            {/* Inner arch */}
            <path d="M90,420 L90,210 Q90,100 210,100 Q330,100 330,210 L330,420" />
            {/* Innermost arch */}
            <path d="M120,420 L120,220 Q120,140 210,140 Q300,140 300,220 L300,420" />
            {/* Geometric details */}
            <line x1="60" y1="420" x2="60" y2="380" strokeWidth="3" />
            <line x1="360" y1="420" x2="360" y2="380" strokeWidth="3" />
            {/* Keystone detail */}
            <polygon
              points="210,55 220,80 210,75 200,80"
              fill={isDark ? "#C9A84C" : "#8B6914"}
              opacity="0.5"
            />
            {/* Column base details */}
            <rect
              x="50"
              y="390"
              width="20"
              height="30"
              opacity="0.4"
              fill={isDark ? "#C9A84C" : "#8B6914"}
            />
            <rect
              x="350"
              y="390"
              width="20"
              height="30"
              opacity="0.4"
              fill={isDark ? "#C9A84C" : "#8B6914"}
            />
            {/* Decorative circles on arch */}
            {[0.2, 0.4, 0.6, 0.8].map((t, i) => {
              const angle = Math.PI + t * Math.PI;
              const cx = 210 + 150 * Math.cos(angle);
              const cy = 200 + 150 * Math.sin(angle);
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="5"
                  fill={isDark ? "#C9A84C" : "#8B6914"}
                  opacity="0.5"
                />
              );
            })}
          </g>
        </svg>
      </motion.div>

      {/* Ancient geometric pattern — bottom left */}
      <motion.div
        animate={{ rotate: [0, 1, 0, -1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          opacity: isDark ? 0.07 : 0.05,
        }}
      >
        <svg
          width="380"
          height="380"
          viewBox="0 0 380 380"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            transform="translate(190,190)"
            fill="none"
            stroke={isDark ? "#C9A84C" : "#8B6914"}
            strokeWidth="1"
          >
            {/* Star of David / Mughal geometric pattern */}
            {[0, 30, 60, 90, 120, 150].map((deg, i) => (
              <g key={i} transform={`rotate(${deg})`}>
                <polygon
                  points="0,-160 15,-80 0,-20 -15,-80"
                  opacity="0.6"
                  fill={isDark ? "#C9A84C" : "#8B6914"}
                />
              </g>
            ))}
            {[0, 45, 90, 135].map((deg, i) => (
              <g key={i} transform={`rotate(${deg})`}>
                <rect
                  x="-4"
                  y="-130"
                  width="8"
                  height="80"
                  opacity="0.4"
                  fill={isDark ? "#8B4513" : "#6B3410"}
                />
              </g>
            ))}
            <circle r="30" strokeWidth="2" opacity="0.5" />
            <circle r="60" strokeWidth="1" opacity="0.35" />
            <circle r="100" strokeWidth="1" opacity="0.25" />
            <circle r="140" strokeWidth="1" opacity="0.2" />
          </g>
        </svg>
      </motion.div>

      {/* Floating ancient script dots — parchment-like */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -15, 0], opacity: [0.15, 0.35, 0.15] }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: i % 4 === 0 ? "8px" : "4px",
            height: i % 4 === 0 ? "8px" : "4px",
            borderRadius: "50%",
            background: i % 2 === 0 ? "#C9A84C" : "#8B4513",
            left: `${8 + ((i * 7.5) % 85)}%`,
            top: `${15 + ((i * 9.2) % 70)}%`,
          }}
        />
      ))}

      {/* Horizontal ornamental divider lines */}
      <div
        style={{
          position: "absolute",
          top: "72px",
          left: 0,
          right: 0,
          height: "1px",
          background: isDark
            ? "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)"
            : "linear-gradient(90deg, transparent, rgba(139,105,20,0.12), transparent)",
        }}
      />

      {/* Stone pillar — left edge */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "80px",
          bottom: 0,
          width: "3px",
          background: isDark
            ? "linear-gradient(180deg, transparent, rgba(201,168,76,0.1), transparent)"
            : "linear-gradient(180deg, transparent, rgba(139,105,20,0.08), transparent)",
        }}
      />
    </div>
  );
};

export default HistoryBackground;
