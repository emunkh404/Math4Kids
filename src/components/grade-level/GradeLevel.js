import React, { useState } from "react";
import "./grade-level.css";

export default function GradeLevel() {
  const levels = [
    "Pre-K",
    "Kindergarten",
    "First Grade",
    "Second Grade",
    "Third Grade",
    "Fourth Grade",
  ];
  const types = ["+", "-", "*", "/"];

  const [activeLevel, setActiveLevel] = useState("");
  const [activeType, setActiveType] = useState("");

  const handleLevelClick = (level) => {
    setActiveLevel(level);

    if (
      level === "Pre-K" ||
      level === "Kindergarten" ||
      level === "First Grade" ||
      level === "Second Grade"
    ) {
      setActiveType(types[0], types[1]); // Enable "+", "-"
    } else if (level === "Third Grade") {
      setActiveType(types[0], types[1], types[2]); // Enable "+", "-", "*"
    } else {
      setActiveType(""); // Reset activeType
    }
  };

  const handleTypeClick = (type) => {
    if (
      activeLevel === "Fourth Grade" ||
      type === "+" ||
      type === "-" ||
      type === "*"
    ) {
      setActiveType(type);
    }
  };

  return (
    <div>
      <div className="level">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => handleLevelClick(level)}
            className={activeLevel === level ? "active" : ""}
          >
            {level}
          </button>
        ))}
      </div>
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => handleTypeClick(type)}
            className={activeType.includes(type) ? "active" : ""}
            disabled={
              !(
                activeLevel === "Fourth Grade" ||
                (activeLevel === "Third Grade" &&
                  (type === "+" || type === "-" || type === "*")) ||
                (activeLevel !== "Third Grade" &&
                  (type === "+" || type === "-"))
              )
            }
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
