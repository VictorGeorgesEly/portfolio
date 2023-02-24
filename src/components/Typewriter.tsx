import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 160,
  deleteSpeed = speed / 2,
  pauseDuration = 1000,
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  if (!Array.isArray(text)) text = [text];

  useEffect(() => {
    const timeoutId = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
        } else if (isDeleting) {
          if (currentTextIndex > 0) {
            setCurrentTextIndex(currentTextIndex - 1);
          } else {
            setIsDeleting(false);
            setIsPaused(true);
            setCurrentStringIndex((currentStringIndex + 1) % text.length);
          }
        } else {
          if (currentTextIndex < text[currentStringIndex].length) {
            setCurrentTextIndex(currentTextIndex + 1);
          } else {
            setIsDeleting(true);
            setIsPaused(true);
          }
        }
      },
      isPaused ? pauseDuration : isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeoutId);
  }, [
    currentStringIndex,
    currentTextIndex,
    speed,
    deleteSpeed,
    pauseDuration,
    text,
    isDeleting,
    isPaused,
  ]);

  return (
    <span>
      {text[currentStringIndex].substring(0, currentTextIndex)}
      <span>▎</span>
    </span>
  );
};

export default Typewriter;
