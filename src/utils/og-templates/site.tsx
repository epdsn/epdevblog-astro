import { SITE } from "@config";

export default () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px",
          maxWidth: "1000px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "20px",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          Eric Perez
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: "600",
            color: "#3b82f6",
            marginBottom: "30px",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Software Engineer
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "24px",
            color: "#e5e7eb",
            lineHeight: "1.4",
            marginBottom: "40px",
            maxWidth: "800px",
          }}
        >
          Front-end development, cloud computing & modern web technologies
        </div>

        {/* Tech Stack */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {["React", "TypeScript", "AWS", "Azure", "Node.js", "Next.js"].map(
            tech => (
              <div
                key={tech}
                style={{
                  background: "rgba(59, 130, 246, 0.2)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "20px",
                  padding: "8px 16px",
                  fontSize: "16px",
                  color: "#3b82f6",
                  fontWeight: "500",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* Website */}
        <div
          style={{
            fontSize: "20px",
            color: "#9ca3af",
            fontWeight: "500",
          }}
        >
          epdsn.dev
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "linear-gradient(90deg, #3b82f6 0%, #10b981 100%)",
        }}
      />
    </div>
  );
};
