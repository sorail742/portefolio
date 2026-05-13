import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Leaf = ({ id, delay, duration }) => {
  const randomLeft = Math.random() * 100;
  const randomDelay = Math.random() * 2;

  const leaves = ['🍂', '🍁', '🌿', '🌱'];
  const randomLeaf = leaves[Math.floor(Math.random() * leaves.length)];

  return (
    <motion.div
      key={id}
      className="fixed pointer-events-none text-2xl"
      style={{ left: `${randomLeft}%`, top: '-50px' }}
      initial={{ y: -50, opacity: 1, rotate: 0, x: 0 }}
      animate={{
        y: window.innerHeight + 50,
        x: Math.sin(randomLeft / 100 * Math.PI * 2) * 100 - 50,
        rotate: 720,
      }}
      transition={{
        duration: duration + randomDelay,
        delay,
        ease: 'linear',
      }}
    >
      {randomLeaf}
    </motion.div>
  );
};

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState([]);
  const [leafId, setLeafId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeaves((prev) => {
        const newLeaves = [...prev, leafId];
        if (newLeaves.length > 12) newLeaves.shift();
        return newLeaves;
      });
      setLeafId((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [leafId]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {leaves.map((id, index) => (
        <Leaf 
          key={id} 
          id={id} 
          delay={index * 0.3} 
          duration={6 + Math.random() * 4}
        />
      ))}
    </div>
  );
}
