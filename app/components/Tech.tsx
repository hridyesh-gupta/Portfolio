"use client";
import React, { useState, ReactNode } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaNodeJs, FaReact, FaDocker, FaPython, FaPhp, FaGit, FaLinux, FaWindows } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiBootstrap, SiGooglecloud, SiFirebase } from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  name = '',
  children,
  ...rest
}: {
  as?: React.ElementType;
  className?: string;
  name?: string;
  children?: ReactNode;
  [key: string]: unknown;
}) => {
  const [showName, setShowName] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <Component 
        className={`relative inline-block py-[1px] overflow-hidden rounded-[20px] ${className}`} 
        {...rest}
        onMouseEnter={() => setShowName(true)}
        onMouseLeave={() => setShowName(false)}
      >
        <div
          className="absolute w-[250%] h-[60%] opacity-70 bottom-[-5%] right-[-150%] rounded-full animate-star-movement-bottom z-0"
          style={{
            background: `radial-gradient(circle at 70% 50%, var(--star-color), transparent 50%)`,
            animationDuration: '5s',
          }}
        ></div>
        <div
          className="absolute w-[250%] h-[60%] opacity-70 top-[-5%] left-[-150%] rounded-full animate-star-movement-top z-0"
          style={{
            background: `radial-gradient(circle at 30% 50%, var(--star-color), transparent 50%)`,
            animationDuration: '5s',
          }}
        ></div>

        <div className="relative z-10 
          bg-gradient-to-b 
          dark:from-black dark:to-gray-900 
          from-white to-gray-100 
          border 
          dark:border-gray-800 border-gray-200 
          text-gray-900 dark:text-white 
          text-center text-[16px] p-6 rounded-[20px] 
          flex flex-col items-center justify-center w-24 h-24 
          shadow-lg dark:shadow-none">
          {children}
        </div>
      </Component>
      
      <span className={`absolute top-full text-xs font-medium 
        text-indigo-600 dark:text-cyan-400 
        transition-opacity duration-200 
        ${showName ? 'opacity-100' : 'opacity-0'}`}>
        {name}
      </span>
    </div>
  );
};

const Tech = () => {
  const techStack = [
    { icon: <FaReact className="text-4xl text-blue-600" />, name: 'React.js' },
    { icon: <SiExpress className="text-4xl text-gray-600" />, name: 'Express.js' },
    { icon: <FaNodeJs className="text-4xl text-green-600" />, name: 'Node.js' },
    { icon: <SiMongodb className="text-4xl text-green-600" />, name: 'MongoDB' },
    { icon: <FaDocker className="text-4xl text-blue-600" />, name: 'Docker' },
    { icon: <SiGooglecloud className="text-4xl text-blue-600" />, name: 'GCP' },
    { icon: <SiFirebase className="text-4xl text-yellow-600" />, name: 'Firebase' },
    { icon: <FaJs className="text-4xl text-yellow-500" />, name: 'JavaScript' },
    { icon: <FaJava className="text-4xl text-red-600" />, name: 'Java' },
    { icon: <FaPython className="text-4xl text-blue-600" />, name: 'Python' },
    { icon: <FaPhp className="text-4xl text-purple-600" />, name: 'PHP' },
    { icon: <FaGit className="text-4xl text-orange-600" />, name: 'GIT' },
    { icon: <SiMysql className="text-4xl text-blue-600" />, name: 'MySQL' },
    { icon: <DiSqllite className="text-4xl text-blue-600" />, name: 'SQL' },
    { icon: <SiBootstrap className="text-4xl text-purple-600" />, name: 'Bootstrap' },
    { icon: <SiTailwindcss className="text-4xl text-teal-600" />, name: 'Tailwind CSS' },
    { icon: <FaCss3Alt className="text-4xl text-blue-600" />, name: 'CSS3' },
    { icon: <FaHtml5 className="text-4xl text-orange-600" />, name: 'HTML5' },
    { icon: <FaLinux className="text-4xl text-orange-600" />, name: 'Linux' },
    { icon: <FaWindows className="text-4xl text-blue-600" />, name: 'Windows' },
  ];
  return (
    <div className="min-h-screen space-y-8 px-4 flex flex-col">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 text-center pt-8">
        My Tech Stack
      </h1>
      <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-4xl mx-auto pb-8 content-center">        {techStack.map((tech, index) => (
          <StarBorder 
            key={index} 
            as="button" 
            color="white" 
            speed="5s"
            name={tech.name}
            className="[--star-color:#6366f1] dark:[--star-color:#06b6d4]" 
            >
            {tech.icon}
          </StarBorder>
        ))}
      </div>
    </div>
  );
};

export default Tech;