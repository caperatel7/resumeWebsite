export const WaveDivider = ({ fill = "#121212", flip = false }) => (
  <div className={`wave-divider${flip ? " flip" : ""}`} aria-hidden="true">
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
      <path d="M0,40 C280,100 720,0 1440,50 L1440,100 L0,100 Z" fill={fill} />
    </svg>
  </div>
);

export const SoftDivider = () => (
  <div className="soft-divider" aria-hidden="true">
    <span className="soft-divider-line" />
    <span className="soft-divider-dot" />
    <span className="soft-divider-line" />
  </div>
);
