import { motion } from "framer-motion";

function AnimatedText({ text, className, delay = 0 }) {
  const sentence = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay, // 👈 THIS is the fix
        staggerChildren: 0.15,
      },
    },
  };

  const word = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={sentence}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split(" ").map((wordText, i) => (
        <motion.span key={i} variants={word} className="inline-block mr-2">
          {wordText.split("").map((char, j) => (
            <motion.span key={j} variants={letter} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimatedText;
