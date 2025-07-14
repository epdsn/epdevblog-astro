import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

export default (post: CollectionEntry<"blog">) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        color: "white",
        fontSize: "48px",
        fontWeight: "bold",
        textAlign: "center",
        padding: "60px",
      }}
    >
      {post.data.title}
    </div>
  );
};
