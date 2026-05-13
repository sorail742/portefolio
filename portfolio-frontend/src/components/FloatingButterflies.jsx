import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Butterfly = ({ id, delay, top }) => {
  const randomDuration = 10 + Math.random() * 6;

  return (
    <motion.div
      key={id}
      className="fixed pointer-events-none text-4xl"
      style={{ top: `${top}%` }}
      initial={{ left: '-50px', opacity: 0 }}
      animate={{
        left: 'calc(100vw + 50px)',
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay,
        ease: 'linear',
        opacity: {
          duration: randomDuration,
          times: [0, 0.1, 0.9, 1],
        },
      }}
    >
      🦋
    </motion.div>
  );
};

export default function FloatingButterflies() {
  const [butterflies, setButterflies] = useState([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    // Crée des papillons initialement
    const initialButterflies = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      top: Math.random() * 80 + 10,
    }));
    setButterflies(initialButterflies);
    setNextId(3);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setButterflies((prev) => {
        const newButterfly = {
          id: nextId,
          top: Math.random() * 80 + 10,
        };
        const updated = [...prev, newButterfly];
        // Garde seulement les 10 derniers papillons
        if (updated.length > 10) updated.shift();
        return updated;
      });
      setNextId((prev) => prev + 1);
    }, 2000); // Un nouveau papillon tous les 2 secondes

    return () => clearInterval(interval);
  }, [nextId]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {butterflies.map((butterfly, index) => (
        <Butterfly
          key={butterfly.id}
          id={butterfly.id}
          delay={index * 0.15}
          top={butterfly.top}
        />
      ))}
    </div>
  );
}
