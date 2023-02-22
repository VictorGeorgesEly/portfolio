import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 120, deleteSpeed = speed / 2 }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  if (!Array.isArray(text)) text = [text];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isDeleting) {
        if (currentTextIndex > 0) {
          setCurrentTextIndex(currentTextIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentStringIndex((currentStringIndex + 1) % text.length);
        }
      } else {
        if (currentTextIndex < text[currentStringIndex].length) {
          setCurrentTextIndex(currentTextIndex + 1);
        } else {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeoutId);
  }, [currentStringIndex, currentTextIndex, speed, deleteSpeed, text, isDeleting]);

  return (
    <span>
      I am {text[currentStringIndex].substring(0, currentTextIndex)}
      <span>▎</span>
    </span>
  );
};

export default Typewriter;