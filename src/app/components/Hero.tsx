import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Poppins, Pacifico, Delicious_Handrawn } from "next/font/google";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const poppins = Poppins({ weight: "400" });
const pacifico = Pacifico({ weight: "400" });
const londrina = Delicious_Handrawn({ weight: "400" });

const Hero = () => {
    return (
        <section className='py-20 container max-w-7xl mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center'>
                <div className='flex flex-col items-center mb-4'>
                    <Image src="/profile.avif" alt='Profile Image' width={100} height={100} className='rounded-full
                    mb-2 w-32 h-32 object-cover ring-2 ring-primary'/>
                </div>

                <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${poppins.className}`}>Hi I'm <span className={`text-primary ${pacifico.className}`}>Rohith S</span></h1>

                <p className={`text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 ${londrina.className}`}>Full Stack Developer | UI / UX Enthusiast</p>

                <div className='flex justify-center space-x-4 mb-6'>
                    <Link href={"/"} className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300
                     transition-colors duration-300'>
                        <FaGithub />
                    </Link>
                    <Link href={"/"} className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300
                     transition-colors duration-300'>
                        <FaLinkedin />
                    </Link>
                    <Link href={"/"} className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300
                     transition-colors duration-300'>
                        <FaInstagram />
                    </Link>
                </div>

                <div className='flex flex-col md:flex-row justify-center gap-4'>
                    <Link href={"/projects"} className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3
                    rounded-lg hover:bg-primary/80 transition-colors'>View Projects</Link>

                    <Link href={"/contact"} className='inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 
                    rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'>Contact Me</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero