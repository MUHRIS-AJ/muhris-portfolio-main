/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { motion } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';
import Image from 'next/image';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const HeroSection = () => {
  const profileImage = config.developer.profileImage || "/profile-main.jpg";
  const fallbackImage = "/logo.png";
  const [imageSrc, setImageSrc] = useState(profileImage);
  const [imageError, setImageError] = useState(false);
  const initials = config.developer.name.split(' ').map(n => n[0]).join('').substring(0, 2);

  const handleImageError = () => {
    if (imageSrc !== fallbackImage) {
      setImageSrc(fallbackImage);
      return;
    }
    setImageError(true);
  };

  return (
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center relative overflow-hidden">
      <BackgroundPresets.Mystical />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Image Section */}
            <motion.div
              variants={itemAnimation}
              className="relative flex-shrink-0 order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 rounded-full blur-3xl animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl" />
                
                {/* Image container with mystical glow border */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)',
                      '0 0 40px rgba(168, 85, 247, 0.7), 0 0 80px rgba(236, 72, 153, 0.5)',
                      '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1"
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                    {!imageError ? (
                      <Image
                        src={imageSrc}
                        alt={config.developer.name}
                        fill
                        className="object-cover object-center"
                        priority
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl md:text-8xl font-bold text-purple-300">
                        {initials}
                      </div>
                    )}
                  </div>
                  
                  {/* Floating particles around image */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 pointer-events-none"
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{
                          duration: 2 + i * 0.3,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                        className="absolute w-2 h-2 rounded-full bg-pink-400"
                        style={{
                          left: `${50 + 40 * Math.cos((i * 60) * Math.PI / 180)}%`,
                          top: `${50 + 40 * Math.sin((i * 60) * Math.PI / 180)}%`,
                          boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)'
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Text Content Section */}
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="show"
              className="flex-1 text-center lg:text-left space-y-8 order-1 lg:order-2"
            >
              <motion.div
                variants={itemAnimation}
                className="inline-flex items-center space-x-2 bg-purple-500/10 border-[1.8px] border-purple-500/30 px-4 py-2 rounded-full text-purple-300 backdrop-blur-sm shadow-lg shadow-purple-500/20"
              >
                <HiCode className="w-5 h-5" />
                <span className="text-sm font-medium">Welcome to my Mystical Portfolio</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  variants={itemAnimation}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                >
                  <motion.span
                    variants={textAnimation}
                    className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-2"
                    style={{
                      textShadow: '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)',
                      filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))'
                    }}
                  >
                    Hi, I'm {config.developer.name}
                  </motion.span>
                  <motion.span
                    variants={textAnimation}
                    className="block text-purple-200/80 text-2xl md:text-3xl lg:text-4xl"
                  >
                    Data Science & Python Developer
                  </motion.span>
                </motion.h1>
              </div>

              <motion.p
                variants={itemAnimation}
                className="text-base sm:text-md text-purple-200/70 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                A passionate developer exploring the universe of data science, machine learning, and web development. Building intelligent solutions with Python, data analysis, and modern technologies.
              </motion.p>

              <motion.div
                variants={itemAnimation}
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6"
              >
                <Link href={"/projects"}>
                  <Button
                    variant="expandIcon"
                    Icon={HiArrowRight}
                    iconPlacement="right"
                    className="rounded-full px-6 py-6 text-base transition-all duration-300 hover:scale-105 font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/50 shadow-lg shadow-purple-500/20"
                  >
                    View Projects
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <SkillsShowcase />
      </div>
    </section>
  );
};

export default HeroSection;
