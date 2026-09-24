import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

let mermaidInitialized = false;

const initMermaid = () => {
  if (mermaidInitialized) return;
  mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    securityLevel: "loose",
    themeVariables: {
      primaryColor: "#1f1f2e",
      primaryTextColor: "#ffffff",
      primaryBorderColor: "#4A2FBD",
      lineColor: "#AA367C",
      fontFamily: "Centra, sans-serif",
    },
  });
  mermaidInitialized = true;
};

export const ArchitectureDiagram = ({ title, definition }) => {
  const containerRef = useRef(null);
  const [diagramId] = useState(() => `architecture-diagram-${Math.random().toString(36).slice(2)}`);
  const [error, setError] = useState(false);

  useEffect(() => {
    initMermaid();

    let cancelled = false;

    mermaid
      .render(diagramId, definition)
      .then(({ svg }) => {
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => { cancelled = true; };
  }, [diagramId, definition]);

  return (
    <div className="architecture-diagram">
      {title && <h4>{title}</h4>}
      {error ? (
        <p className="tab-placeholder">Diagram failed to load.</p>
      ) : (
        <div ref={containerRef} className="architecture-diagram-canvas" />
      )}
    </div>
  );
};
