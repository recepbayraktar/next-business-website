import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  words: string[];
} & React.HTMLAttributes<HTMLSpanElement>;

export const AnimatedText = ({ words, className }: Props) => {
  const [wordOrder, setWordOrder] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeoutDuration = isAnimating
      ? FADE_INTERVAL_MS
      : WORD_CHANGE_INTERVAL_MS;
    const timeout = setTimeout(() => {
      if (isAnimating) {
        setWordOrder((prevWordOrder) => (prevWordOrder + 1) % words.length);
      }
      setIsAnimating(!isAnimating);
    }, timeoutDuration);

    return () => clearTimeout(timeout);
  }, [isAnimating]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.span
          key={words[wordOrder]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_INTERVAL_MS / 1000 }}
          className={className}
        >
          {words[wordOrder]}
        </motion.span>
      )}
    </AnimatePresence>
  );
};

const FADE_INTERVAL_MS = 1000;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
