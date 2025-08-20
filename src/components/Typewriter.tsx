import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number; // restart delay in ms
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, delay = 10000 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let typing: ReturnType<typeof setInterval>;
    let restart: ReturnType<typeof setTimeout>;
    const startTyping = () => {
      setDisplayedText("");
      typing = setInterval(() => {
        setDisplayedText((prev) => text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(typing);
          restart = setTimeout(() => {
            i = 0;
            startTyping(); // restart typing after delay
          }, delay);
        }
      }, speed);
    };

    startTyping();

    return () => {
      clearInterval(typing);
      clearTimeout(restart);
    };
  }, [text, speed, delay]);

  return (
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default Typewriter;
