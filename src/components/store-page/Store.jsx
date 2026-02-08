"use client";
import React from "react";
import "./Store.css";
import FloatingLines from "../floating-lines/FloatingLines";

function Store() {
  return (
    <div className="store-wrapper">
      {/* Background Animation Layer */}
      <div className="store-bg-layer">
        <FloatingLines
          linesGradient={["#34D399", "#06B6D4", "#8B5CF6", "#afacac"]}
          enabledWaves={['middle', 'bottom']}
          lineCount={[15, 15]}
          lineDistance={[8, 8]}
          bottomWavePosition={{ x: 0, y: -1.5, rotate: 1.85 }}
          middleWavePosition={{ x: 2, y: 1.5, rotate: 1.85 }}
          animationSpeed={3.3}
          parallaxStrength={0.5}
          interactive={true}
          bendStrength={-3}
        />
      </div>

      {/* Content Layer */}
      <div className="store-content">
        <div className="store-container">
          {/* Main Title */}
          <h1 className="store-title">
            Coming Soon
          </h1>

          {/* Subtitle */}
          <p className="store-subtitle">
            Our store is currently under development. Check back soon!
          </p>

          {/* Decorative Line */}
          <div className="decorative-line"></div>


        </div>
      </div>
    </div>
  );
}

export default Store;