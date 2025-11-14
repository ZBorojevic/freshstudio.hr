import React, { useEffect, useRef } from "react";

const GrowthWavesBg: React.FC = () => {
  const gradientRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const colors = [
      [255, 255, 255], // bijela
      [210, 210, 210], // svjetlosiva
      [140, 140, 140], // srednja siva
      [70, 70, 70],    // tamnosiva
      [25, 25, 25],    // gotovo crna
      [0, 0, 0],       // crna
    ];

    let step = 0;
    const colorIndices = [0, 1, 2, 3]; // ✅ const je ok, mijenjamo samo elemente
    const gradientSpeed = 0.01;       // ⚡ brže (bilo 0.002)

    let raf = 0;

    const updateGradient = () => {
      const c0_0 = colors[colorIndices[0]];
      const c0_1 = colors[colorIndices[1]];
      const c1_0 = colors[colorIndices[2]];
      const c1_1 = colors[colorIndices[3]];

      const istep = 1 - step;

      const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      const color1 = `rgb(${r1},${g1},${b1})`;

      const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      const color2 = `rgb(${r2},${g2},${b2})`;

      if (gradientRef.current) {
        gradientRef.current.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
      }

      step += gradientSpeed;
      if (step >= 1) {
        step %= 1;
        // rotiramo indekse (mutiramo elemente, ne referencu → const je ok)
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        colorIndices[1] =
          (colorIndices[1] +
            Math.floor(1 + Math.random() * (colors.length - 1))) %
          colors.length;

        colorIndices[3] =
          (colorIndices[3] +
            Math.floor(1 + Math.random() * (colors.length - 1))) %
          colors.length;
      }
    };

    const loop = () => {
      updateGradient();
      raf = requestAnimationFrame(loop);
    };

    // respect prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      // postavi statičan gradient (bez animacije)
      if (gradientRef.current) {
        gradientRef.current.style.background =
          "linear-gradient(to right, rgb(220,220,220), rgb(30,30,30))";
      }
      return;
    }

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={gradientRef}
      className="absolute inset-0 -z-10 w-full h-full overflow-hidden"
    >
      {/* suptilan glow zbog čitljivosti teksta */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] mix-blend-overlay" />
    </div>
  );
};

export default GrowthWavesBg;
