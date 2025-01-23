'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { useRef, useState, useEffect } from 'react';

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.2;
}

export default function Intro() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSet, setCurrentSet] = useState(0);

  // Each array contains [single line, double line, double line]
  const quoteSets = [
    ["I solve problems with code.",
      "For me, programming is about finding solutions, not just writing lines.",
      "I believe in building technology that simplifies lives and drives impact."],
    ["Every bug teaches me something new.",
      "My goal is to make complex ideas work seamlessly for everyone.",
      "I don’t just write code; I craft experiences that matter."],
    ["I code because I love creating.",
      "Each project is a new challenge, and I thrive on solving them.",
      "I believe in clean, meaningful code that speaks for itself."],
    ["Tech fuels my creativity.",
      "I love turning problems into opportunities with the power of code.",
      "For me, success is about creating value through technology."],
    ["I let my code do the talking.",
      "I believe every piece of code should be simple, clear, and purposeful.",
      "My journey in tech is all about learning, growing, and sharing knowledge."]
  ];

  useLenis(({ scroll }) => {
    setScrollY(scroll);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % quoteSets.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSet, quoteSets.length]); 

  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;

    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) /
      clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div
      ref={refContainer}
      className="relative z-10 bg-black text-white dark:bg-white dark:text-black"
      id="intro"
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-10 py-24 text-4xl font-semibold tracking-tight md:py-28 md:text-6xl lg:px-20 lg:py-3 lg:text-7xl">
        <div className="leading-[1.15]">
          <div className="introText" style={{ opacity: opacityForBlock(progress, 0) }}>
            {quoteSets[currentSet][0]}
          </div>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            {quoteSets[currentSet][1]}
          </span>
          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            {quoteSets[currentSet][2]}
          </span>
        </div>
      </div>
    </div>
  );
}