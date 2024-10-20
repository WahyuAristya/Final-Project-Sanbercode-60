// src/components/Skeleton.js
import React from "react";

const Skeleton = ({ width = "100%", height = "100%" }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: "#E0E0E0",
        borderRadius: "10px",
        marginBottom: "10px",
        animation: "pulse 1.5s infinite",
      }}
    />
  );
};

export default Skeleton;
