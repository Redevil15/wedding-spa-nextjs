"use client";

import { easeInOut, motion } from "framer-motion";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    transition: {
      duration: 1,
      ease: easeInOut,
    },
    opacity: [0, 1]
  }
}

const images = {
  flutter: "./palomas.png",
  redux: "./pastel.png",
  sass: "./rings.png"
}

export const Header = () => {
  return (
    <div id="home" className="pt-16 flex flex-1 flex-col md:flex-col">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex flex-0.65 flex-col justify-start items-start h-full mt-5 md:w-full md:mx-0 md:mr-0 md:mb-2"
      >
        <div className="flex justify-end items-end flex-col md:flex-row md:justify-start md:items-start">
          <div className="flex flex-row items-center p-4 bg-white rounded-lg shadow-md">
            <span className="text-4xl md:text-5xl">👰🏻💍🤵🏻</span>
            <div className="ml-4">
              <p className="p-text">Nos casamos!</p>
              <h1 className="head-text">Faby & Brandon</h1>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex- mt-8 justify-end items-end relative md:ml-0 md:mb-2"
      >
        <img src="./couple.png" alt="profile_bg" className="w-full z-9" />
        {/*  <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src="./circle.svg"
          alt="profile_circle"
          className="absolute bottom-0 w-full h-5/6 z-0"
        /> */}
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="flex flex-0.75 flex-row justify-between items-start md:w-full md:flex-row md:flex-wrap md:ml-0"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className={`w-24 h-24 md:w-${index === 0 ? '40' : index === 1 ? '60' : '32'} md:h-${index === 0 ? '40' : index === 1 ? '60' : '32'} flex justify-center items-center rounded-full bg-white shadow-md m-4`} key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" className="w-3/5 h-3/5" />
          </div>
        ))}
      </motion.div>

    </div>
  )
}
