'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import SectionContainer from './section-container';

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };

  return (
    <SectionContainer>
      <motion.main
        className="mb-auto"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </motion.main>
    </SectionContainer>
  );
}
