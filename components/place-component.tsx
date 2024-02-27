"use client";

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const PlaceComponent = () => {
  const googleMapsUrl = 'https://maps.app.goo.gl/pwvAtCc97k3J5oby8'



  return (
    <div className='flex items-center flex-col justify-center'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='flex flex-col items-center justify-center mt-8'
      >
        <svg width="99px" height="99px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#b69f6b"><g id="SVGRepo_bgCarrier" stroke-width="0.5"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#b69f6b"></g><g id="SVGRepo_iconCarrier"> <path strokeWidth="0.75" d="M3 18H21M12 7V4M12 4H10M12 4H14M5 15V12C5 9.23858 7.23858 7 10 7H14C16.7614 7 19 9.23858 19 12V15H5Z" stroke="#b69f6b" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

        <h2 className="leading-10 text-20 text-[#b69f6b] uppercase tracking-wider">Recepción</h2>
        <span className="flex justify-center items-center text-gray-700 font-normal text-base leading-10 dark:text-gray-800 animate-pulse">17:00</span>
        <p className="text-gray-700 font-semibold text-base leading-10">Salón Buenavista</p>
        <p className='text-[#787878] font-normal text-base leading-10'>Av. Buenavista 425, San Mateo Atenco.</p>
        <a className="text-[#b69f6b] fonrt-semibold text-base leading-10 italic mb-8" href={googleMapsUrl} target="_blank" rel='noopener noreferrer'>Ver ubicación en Mapa</a>
      </motion.div>

      <motion.div
        className='flex flex-col items-center justify-center'
        whileInView={{ x: [+100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <svg fill="#b69f6b" height="99px" width="99px" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve" stroke="0.5">
          <path strokeWidth="0.75" d="M477.782,246.216c-4.268-24.701-14.428-47.653-29.626-67.159l4.199-1.535c18.025-6.589,27.363-26.651,20.814-44.722 l-10.529-29.055c-6.398-17.655-19.28-31.741-36.271-39.663c-16.945-7.9-35.947-8.716-53.503-2.298l-28.834,10.541 c-18.025,6.589-27.363,26.651-20.814,44.722l1.545,4.264c-24.84,0.866-49.059,7.912-70.745,20.677 c-4.869,2.866-9.546,5.985-14.019,9.344c-4.628-3.475-9.474-6.693-14.525-9.64c-21.578-12.589-45.602-19.527-70.239-20.383 l1.545-4.262c6.549-18.071-2.788-38.133-20.814-44.722l-28.834-10.541c-17.557-6.418-36.557-5.601-53.503,2.298 c-16.991,7.922-29.873,22.008-36.271,39.663L6.828,132.8c-6.549,18.071,2.788,38.133,20.814,44.722l4.202,1.536 c-15.454,19.841-25.696,43.237-29.83,68.344c-4.935,29.973-0.761,60.424,12.07,88.06c16.961,36.531,47.086,64.213,84.827,77.947 c37.596,13.682,78.259,11.869,114.501-5.104c9.572-4.483,18.451-9.857,26.587-15.98c8.136,6.122,17.015,11.497,26.587,15.98 c20.164,9.444,41.695,14.194,63.308,14.194c17.231,0,34.515-3.02,51.193-9.09c37.741-13.734,67.866-41.416,84.827-77.947 C478.924,307.437,483.029,276.576,477.782,246.216z M454.366,139.612c2.803,7.734-1.18,16.315-8.878,19.129L383.6,181.365 c-0.231,0.084-0.463,0.163-0.696,0.236L403.3,137.67c16.313,5.298,33.774,5.189,50.211-0.419L454.366,139.612z M379.733,80.563 c12.53-4.581,26.091-3.998,38.184,1.64c12.14,5.66,21.345,15.73,25.92,28.353l2.859,7.89c-14.567,4.867-30.185,3.986-44.166-2.534 c-0.029-0.013-0.056-0.026-0.084-0.039c-0.005-0.002-0.011-0.005-0.016-0.008c-14.026-6.571-24.784-18.057-30.453-32.467 L379.733,80.563z M350.899,91.104l2.29-0.837c6.289,16.276,17.443,29.787,31.996,38.93l-20.374,43.882 c-0.086-0.208-0.167-0.418-0.245-0.631l-22.546-62.213C339.218,102.499,343.201,93.918,350.899,91.104z M126.808,90.267 l2.29,0.837c7.698,2.814,11.681,11.395,8.878,19.129l-22.546,62.213c-0.077,0.213-0.159,0.424-0.245,0.631l-20.374-43.882 C109.366,120.054,120.52,106.543,126.808,90.267z M36.16,110.556c4.575-12.623,13.78-22.693,25.92-28.353 c12.093-5.637,25.653-6.221,38.184-1.64l7.757,2.835c-5.682,14.444-16.477,25.951-30.554,32.514 c-13.981,6.519-29.598,7.403-44.166,2.534L36.16,110.556z M25.631,139.612l0.855-2.361c16.435,5.608,33.897,5.717,50.211,0.419 l20.396,43.931c-0.233-0.073-0.465-0.151-0.697-0.236l-61.888-22.623C26.811,155.927,22.828,147.346,25.631,139.612z M204.929,390.197c-31.391,14.702-66.613,16.272-99.178,4.422c-32.708-11.903-58.821-35.902-73.527-67.576 c-21.823-47.003-14.1-101.746,19.508-140.714l37.797,13.817c8.746,3.197,18.209,2.791,26.649-1.145 c8.459-3.944,14.872-10.955,18.056-19.742l13.783-38.032c28.02-0.471,54.618,7.986,76.554,23.43 c-12.577,12.467-22.903,27.154-30.519,43.558c-27.444,59.111-13.249,127.179,30.435,170.664 C218.406,383.145,211.877,386.943,204.929,390.197z M212.192,216.635c6.973-15.019,16.466-28.215,27.825-39.194 c11.333,10.972,20.811,24.165,27.789,39.194c24.107,51.922,11.191,111.807-27.807,149.449 C201.001,328.441,188.085,268.557,212.192,216.635z M447.773,327.042c-14.706,31.674-40.818,55.673-73.527,67.576 c-32.564,11.851-67.785,10.28-99.178-4.422c-6.948-3.254-13.478-7.052-19.558-11.317c43.684-43.485,57.879-111.554,30.435-170.664 c-7.614-16.399-17.929-31.076-30.493-43.535c21.939-15.435,48.539-23.913,76.529-23.451l13.782,38.03 c3.184,8.787,9.597,15.798,18.056,19.742c8.44,3.936,17.904,4.342,26.648,1.145l37.801-13.818 C461.943,225.305,469.693,279.828,447.773,327.042z"></path>
        </svg>

        <h2 className="leading-10 text-20 text-[#b69f6b] uppercase tracking-wider">Ceremonia</h2>
        <span className="flex justify-center items-center text-gray-700 font-normal text-base leading-10 uppercase animate-pulse">17:20</span>
        <p className="text-gray-700 font-semibold text-base leading-10">Salón Buenavista</p>
        <p className='text-[#787878] font-normal text-base leading-10'>Av. Buenavista 425, San Mateo Atenco.</p>
        <a className="text-[#b69f6b] fonrt-semibold text-base leading-10 italic" href={googleMapsUrl} target="_blank" rel='noopener noreferrer'>Ver ubicación en Mapa</a>
      </motion.div>
    </div>
  )
}