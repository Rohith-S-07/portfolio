"use client"

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Poppins, Pacifico, Delicious_Handrawn } from "next/font/google";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, fadeIn } from '@/utils/animation';

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const delicious = Delicious_Handrawn({ subsets: ["latin"], weight: "400" });

const Hero = () => {

    const size = 165;
    const radius = (size - 5) / 2;
    return (
        <section className='py-20 container max-w-7xl mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center'>
                <motion.div
                    {...scaleIn}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-center mb-8">

                    <svg width={size} height={size} className="absolute">
                        <motion.circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            stroke="#007AFF"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            initial={{ strokeDasharray: '24 10 0 0' }}
                            animate={{
                                strokeDasharray: [
                                    '15 30 25 25',
                                    '16 45 92 72',
                                    '4 50 22 22',
                                ],
                                rotate: [120, 360],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        />
                    </svg>

                    {/* Profile Image */}
                    <Image
                        src="/rohith1.jpg"
                        alt="Profile Image"
                        width={160}
                        height={160}
                        className="rounded-full object-cover z-10"
                        unoptimized
                    />
                </motion.div>

                <motion.h1
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                    className={`text-4xl md:text-6xl font-bold mb-6 ${poppins.className}`}>Hi, I&apos;m
                    <motion.span
                        {...fadeIn}
                        transition={{ delay: 0.8 }}
                        className={`text-primary ${pacifico.className}`}> Rohith
                    </motion.span>
                </motion.h1>

                <motion.p
                    {...fadeInUp}
                    transition={{ delay: 0.3 }} className={`text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 ${delicious.className}`}>Full Stack Developer | UI / UX Enthusiast | Microsoft Power Platform
                </motion.p>
                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.5 }}
                    className='flex justify-center space-x-4 mb-6'>
                    <motion.a href={"https://github.com/Rohith-S-07"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300
                     transition-colors duration-300'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a href={"https://www.linkedin.com/in/rohith-s07/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300
                     transition-colors duration-300'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a href={"https://www.instagram.com/rohith.07._/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300
                     transition-colors duration-300'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaInstagram />
                    </motion.a>
                </motion.div>

                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                    className='flex flex-col md:flex-row justify-center gap-4'>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href={"/projects"}
                            className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors'>
                            View Projects
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="/rohith_resume_12.pdf"
                            download
                            className='inline-block w-full bg-gray-400  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'>
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero