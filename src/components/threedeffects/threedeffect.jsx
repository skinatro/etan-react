"use client";
import React, { useRef, useState } from "react";
import "./threedeffect.css";

console.log("✅ 3D Card Effect Module Loaded Successfully!");

export const CardContainer = ({ children, className = "", containerClassName = "" }) => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center (-1 to 1 range)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // MORE DRAMATIC EFFECT: Divide by smaller number (8 instead of 25)
    const rotateX = (mouseY / rect.height) * -20; // Max 20deg rotation
    const rotateY = (mouseX / rect.width) * 20;   // Max 20deg rotation
    
    // Add subtle translation for depth
    const translateZ = 10; // Lift the card slightly
    
    containerRef.current.style.transform = 
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
    
    console.log(`🎯 Transform: rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`);
  };

  const handleMouseEnter = (e) => {
    console.log("👆 Mouse entered card - 3D effect activated");
    setIsHovering(true);
    if (!containerRef.current) return;
    containerRef.current.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = () => {
    console.log("👋 Mouse left card - resetting position");
    setIsHovering(false);
    if (!containerRef.current) return;
    containerRef.current.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
    containerRef.current.style.transform = 
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  return (
    <div
      className={`card-perspective-wrapper ${containerClassName}`}
      style={{
        perspective: "1000px",
        perspectiveOrigin: "center center",
        width: "100%",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className={`card-3d-inner ${className} ${isHovering ? 'is-hovering' : ''}`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
          pointerEvents: "none",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const CardBody = ({ children, className = "" }) => {
  return (
    <div
      className={`card-body-3d ${className}`}
      style={{
        transformStyle: "preserve-3d",
        pointerEvents: "auto",
      }}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className = "",
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const parseValue = (value) => {
    if (typeof value === "string") {
      return parseFloat(value) || 0;
    }
    return value || 0;
  };

  const tx = parseValue(translateX);
  const ty = parseValue(translateY);
  const tz = parseValue(translateZ);
  const rx = parseValue(rotateX);
  const ry = parseValue(rotateY);
  const rz = parseValue(rotateZ);

  return (
    <Tag
      className={`card-item-3d ${className}`}
      style={{
        transform: `translateX(${tx}px) translateY(${ty}px) translateZ(${tz}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease-out",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

console.log("📦 Exported components:", { CardContainer, CardBody, CardItem });