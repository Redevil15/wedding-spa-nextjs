"use client";

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';

const COUNTDOWN_TARGET: Date = new Date('2024-06-15T00:00:00')

const getTimeLeft = () => {
  const currentTime = new Date();
  const total = COUNTDOWN_TARGET.getTime() - currentTime.getTime();
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { total, days, hours, minutes, seconds };
}

interface DateComponentProps {
  suppressHydrationWarning: boolean
}
export const DateComponent = ({
  suppressHydrationWarning
}: DateComponentProps) => {

  const [isMounted, setIsMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(() => {
    if (!suppressHydrationWarning) {
      return getTimeLeft();
    }
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  });

  useEffect(() => {
    setIsMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div id="time&place" className="relative z-9 w-full px-5 md:px-0 md:max-w-screen-lg mx-auto py-10 md:py-20 bg-cover bg-center">
      <div className="absolute inset-0">
        <Image
          src="/saveDate.jpg"
          alt="Save the date"
          layout="fill" // Fill the container
          objectFit="cover" // Cover the container
          objectPosition="center" // Center the image
          className="rounded-lg" // Add any additional styles here
        />
      </div>
      <div className="relative z-9 text-center text-[#b69f6b]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Save the date</h1>
        <span className="text-lg md:text-xl font-semibold block text-gray-700">15 junio 2024</span>
      </div>
      <div
        className='relative z-9 flex flex-col items-center justify-center gap-4'
      >
        <motion.p
          className='border-2 border-[#b69f6b] p-8 w-[150px] h-auto flex flex-col text-center text-2xl font-bold text-[#b69f6b] bg-gray-100'
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >{timeLeft.days}
          <span className='text-base font-normal'>Dias</span>
        </motion.p>
        <motion.p
          className='border-2 border-[#b69f6b] p-8 w-[150px] h-auto flex flex-col text-center text-2xl font-bold text-[#b69f6b] bg-gray-100'
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          {timeLeft.hours}<span className='text-base font-normal'>Horas</span>
        </motion.p>
        <motion.p
          className='border-2 border-[#b69f6b] p-8 w-[150px] h-auto flex flex-col text-center text-2xl font-bold text-[#b69f6b] bg-gray-100'
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          {timeLeft.minutes}<span className='text-base font-normal'>Minutos</span>
        </motion.p>
        <motion.p
          className='border-2 border-[#b69f6b] p-8 w-[150px] h-auto flex flex-col text-center text-2xl font-bold text-[#b69f6b] bg-gray-100'
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        >
          {timeLeft.seconds}<span className='text-base font-normal'>Segundos</span>
        </motion.p>
      </div>
    </div>
  )
}