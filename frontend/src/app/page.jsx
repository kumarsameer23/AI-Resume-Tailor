'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold"
      >
        Welcome to your Resume Tailor Project!
      </motion.h1>
    </div>
  );
}