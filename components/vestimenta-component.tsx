"use client";

import Image from "next/image"
import { motion } from "framer-motion"

export const VestimentaComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl text-[#b69f6b] font-bold mt-8 uppercase tracking-wide">Codigo de vestimenta</h1>
      <h3 className="text-xl text-gray-700">Etiqueta <span className="italic">formal</span></h3>
      <div className="flex items-center justify-center">
        <div className="flex  flex-col items-end justify-end bg-gray-100/40 rounded-md mr-2">
          <motion.img
            src="/codigo-hombre.png"
            alt="vestimenta"
            width={600}
            height={600}
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <h1 className="w-full flex justify-center text-xl text-[#b69f6b] font-semibold tracking-wider mt-4">Hombres</h1>
          <h2 className="w-full flex justify-center text-gray-700 mt-2 tracking-wide mb-4">Smoking</h2>
        </div>
        <div className="flex flex-col items-start justify-start bg-gray-100/40 rounded-md">
          <img
            src="/codigo-mujer.png"
            alt="vestimenta"
            width={600}
            height={600}
            className="rounded-lg h-full"
          />
          <h1 className="w-full flex justify-center text-xl text-[#b69f6b] font-semibold tracking-wider mt-4">Mujeres</h1>
          <h2 className="w-full flex justify-center text-gray-700 mt-2 tracking-wide mb-4">Vestido largo</h2>
        </div>
      </div>
    </div>
  )
}