'use client'

import { projects } from "@/contents/projects"
import Image from "next/image"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { Pacifico, Delicious_Handrawn } from "next/font/google";
import { motion } from 'framer-motion'
import {
    fadeInUp,
    staggerContainer,
    cardHoverSmall
} from '@/utils/animation'

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const delicious = Delicious_Handrawn({ subsets: ["latin"], weight: "400" });

const Projects = () => {
    return (
        <div className="container max-w-7xl mx-auto py-12">
            <motion.h1
                className={`text-primary ${pacifico.className} text-4xl font-bold mb-10 text-center`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Projects
            </motion.h1>
            <motion.p
                className="text-lg text-secondary mb-24 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Here are some of my recent projects. Click on the links to view the code or live demo.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="p-[1px] rounded-xl bg-gradient-to-br from-primary/10 to-purple-900 shadow-lg"
                        variants={fadeInUp}
                        {...cardHoverSmall}
                    >

                        <div className='bg-white/95 dark:bg-dark/70 backdrop-blur-md rounded-xl h-full overflow-hidden'>
                            <motion.div
                                className="aspect-video bg-gray-200 dark:bg-gray-800"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full"
                                    width={500}
                                    height={500}
                                />
                            </motion.div>

                            <div className="p-6">
                                <motion.h3
                                    className={`text-primary ${delicious.className} text-2xl font-light mb-2`}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-600 dark:text-gray-300 mb-4 text-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {project.description}
                                </motion.p>

                                <motion.div
                                    className="flex flex-wrap gap-2 mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {project.technologies.map((tech, techIndex) => (
                                        <motion.span
                                            key={techIndex}
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                <motion.div
                                    className="flex gap-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <motion.a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub className="h-5 w-5" />
                                        <span>Code</span>
                                    </motion.a>
                                    <motion.a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt className="h-5 w-5" />
                                        <span>Live Demo</span>
                                    </motion.a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
export default Projects