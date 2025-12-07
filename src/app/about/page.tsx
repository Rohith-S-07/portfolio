"use client"

import React from 'react'
import { Pacifico, Delicious_Handrawn } from "next/font/google";
import { FaTools } from 'react-icons/fa'
import { GiPaintBrush } from 'react-icons/gi';
import { ServerStackIcon } from '@heroicons/react/24/outline';
import { GoWorkflow } from "react-icons/go";
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall
} from '@/utils/animation'

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const delicious = Delicious_Handrawn({ subsets: ["latin"], weight: "400" });

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-12'>

      <motion.h1
        className={`text-primary ${pacifico.className} text-4xl font-bold mb-10 text-center`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      {/* Bio Section*/}
      <motion.section
        className="mb-16"
        {...fadeInUp}
      >
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center mb-4'>
         I&apos;m a full-stack developer focused on building clean, responsive interfaces using React and Tailwind CSS, 
         backed by MERN stack expertise. I also work with the Microsoft Power Platform to create low-code apps and 
         automate workflows that solve real business problems.
        </p>

        <p className='text-lg text-secondary max-w-3xl mx-auto text-center mb-4'>
          I&apos;m looking for a full-time role where I can contribute to impactful projects and grow with a collaborative team.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className={`text-primary ${delicious.className} section-title text-4xl`}
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >

          <motion.div
            className="p-[1px] rounded-xl bg-gradient-to-br from-primary/40 to-purple-900 shadow-lg"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="bg-white dark:bg-dark/70 backdrop-blur-md p-6 rounded-xl h-full">
              <h3 className={`${pacifico.className} text-2xl font-semibold mb-4 flex text-primary`}> <GiPaintBrush className="h-8 w-8 me-2" />Frontend</h3>
              <ul className="text-secondary space-y-2 dark:text-gray-300">
                <li>HTML / CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React / Next.js</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="p-[1px] rounded-xl bg-gradient-to-br from-primary/40 to-purple-900 shadow-lg"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="bg-white dark:bg-dark/70 backdrop-blur-md p-6 rounded-xl h-full">
              <h3 className={`${pacifico.className} text-2xl font-semibold mb-4 flex text-primary`}> <ServerStackIcon className="h-8 w-8 me-2" />Backend</h3>
              <ul className="text-secondary space-y-2 dark:text-gray-300">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="p-[1px] rounded-xl bg-gradient-to-br from-primary/40 to-purple-900 shadow-lg"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="bg-white dark:bg-dark/70 backdrop-blur-md p-6 rounded-xl h-full">
              <h3 className={`${pacifico.className} text-2xl font-semibold mb-4 flex text-primary`}> <FaTools className="h-8 w-8 me-2" />Tools & Others</h3>
              <ul className="text-secondary space-y-2 dark:text-gray-300">
                <li>Git / GitHub</li>
                <li>VS Code</li>
                <li>Vercel / Render</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="p-[1px] rounded-xl bg-gradient-to-br from-primary/40 to-purple-900 shadow-lg"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="bg-white dark:bg-dark/70 backdrop-blur-md p-6 rounded-xl h-full">
              <h3 className={`${pacifico.className} text-2xl font-semibold mb-4 flex text-primary`}> <GoWorkflow className="h-8 w-8 me-2" />MS Power Platform</h3>
              <ul className="text-secondary space-y-2 dark:text-gray-300">
                <li>Power Automate</li>
                <li>Power Apps</li>
                <li>Microsoft Dataverse</li>
              </ul>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2
          className={`text-primary ${delicious.className} section-title text-4xl`}
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="p-[1px] rounded-xl bg-gradient-to-br from-primary/40 to-purple-900 shadow-lg"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="bg-white dark:bg-dark/70 backdrop-blur-md p-6 rounded-xl h-full">
              <h3 className="text-xl font-semibold mb-2">Full Stack Developer Intern</h3>
              <p className="text-primary mb-2">TechSmew Innovations • September 2025 - Present</p>
              <ul className="text-secondary dark:text-gray-300 list-disc list-inside space-y-2">
                <li>Working on the Microsoft Power Platform using Power Apps, Power Automate, and Dataverse.</li>
                <li>Developing and modifying low-code applications, multi-level approval workflows, and automation processes.</li>
                <li>Collaborating in Agile sprints, handling bug fixes, testing, and configuring and optimizing workflows for better efficiency.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2
          className={`text-primary ${delicious.className} section-title text-4xl`}
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="p-[1px] rounded-xl bg-gradient-to-br from-primary/40 to-purple-900 shadow-lg mb-5"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className='bg-white dark:bg-dark/70 backdrop-blur-md p-6 rounded-xl h-full'>
              <h3 className="text-xl font-semibold mb-2">Master of Computer Applications (MCA)</h3>
              <p className="text-primary mb-2">PSG College of Technology • 2023 - 2025</p>
              <p className="text-secondary dark:text-gray-300">
                Focused on full-stack development and software engineering. Gained practical knowledge
                of data structures and web technologies by building real-world projects using the MERN
                stack, React, and Node.js.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="p-[1px] rounded-xl bg-gradient-to-br from-primary/40 to-purple-900 shadow-lg"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className='bg-white dark:bg-dark/70 backdrop-blur-md p-6 rounded-xl h-full'>
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-primary mb-2">Jairam Arts and Science College • 2019 - 2022</p>
              <p className="text-secondary dark:text-gray-300">
                Graduated with distinction. Built a strong foundation in programming and core
                computer science concepts.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>

    </div >
  )
}

export default About