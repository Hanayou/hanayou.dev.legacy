"use client";

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProfileImage() {
  return (
    <motion.div
      className='m-auto z-0 relative w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] bg-bgPrimary rounded-full'
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        exit={{ scale: 1, opacity: 0 }}
      >
      <div className='absolute h-[1583px] w-screen -z-10 pointer-events-none top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-x-hidden'>
        <div className='absolute -z-10 pointer-events-none top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1835px] h-[1583px] bg-[radial-gradient(40.00%_40.00%_at_50.00%_50.00%,rgba(113,202,252,0.30)_0%,rgba(58,66,79,0.00)_100%)] opacity-[72%]' />
      </div>
      <div className='absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[220px] lg:w-[320px] h-[220px] lg:h-[320px] rounded-full bg-primary'>
        <Image src="/sam.png" alt="Sam" width={1000} height={1000} className='absolute translate-y-[-59px] lg:translate-y-[-85px] rounded-full'/>
      </div>
    </motion.div>
  )
}