import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

export default (post: CollectionEntry<"blog">) => {
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
          justifyContent: "space-between",
          padding: "60px",
          maxWidth: "1000px",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Post Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "white",
            lineHeight: "1.1",
            marginBottom: "20px",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            maxHeight: "70%",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.data.title}
        </div>

        {/* Post Description */}
        {post.data.description && (
          <div
            style={{
              fontSize: "24px",
              color: "#e5e7eb",
              lineHeight: "1.4",
              marginBottom: "30px",
              maxHeight: "20%",
              overflow: "hidden",
            }}
          >
            {post.data.description}
          </div>
        )}

        {/* Bottom Info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          {/* Author */}
          <div
            style={{
              fontSize: "20px",
              color: "#9ca3af",
              fontWeight: "500",
            }}
          >
            by {post.data.author}
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
