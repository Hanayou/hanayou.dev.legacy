"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medal } from "../icons/Medal";
import { cn } from '@/shared/lib/utils';
import { ClassValue } from 'clsx';

export default function Milestone({title, description, date, className}: TMilestone & {className?: ClassValue}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className={cn("relative flex justify-center", className)}
      initial={{ height: '60px' }}
      animate={{ height: isExpanded ? 'auto' : '60px' }}
      transition={{ duration: 0.3 }}
    >
      <div className={cn("absolute bottom-0 p-[1px] flex justify-center bg-gradient-to-br from-[#FFF] from-0% to-[#FF5B00] to-[69%] rounded-[12px] drop-shadow-[4px_0px_12px_rgba(0,0,0,0.25)]")}>
        <motion.div 
          className="z-10 rounded-[11px] p-[5px] bg-gradient-to-br from-[#22272E] from-50% to-[#34424B] to-50% min-w-[35px] cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <motion.div className="flex flex-col items-center">
            <div className="text-primary">
              <Medal width={42} height={42}/>
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  layout
                  initial={{opacity: 0, height: 0, width: 0}}
                  animate={{opacity: 1, height: 'auto', width: 'auto'}}
                  exit={{opacity: 0, height: 0, width: 0}}
                  transition={{ duration: 0.3 }}
                  className='flex flex-col items-center px-[5px] pb-[10px] gap-y-1 overflow-hidden'
                >
                  <motion.h4
                    layout
                    className="text-white text-center text-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {title}
                  </motion.h4>
                  <motion.p 
                    className="text-white text-center text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {(new Date(date)).toLocaleDateString(
                       navigator.language, 
                      { month: 'short', year: 'numeric' }
                    )}
                  </motion.p>
                  <motion.p 
                    className="text-white text-center text-sm w-[150px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {description}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <div className="z-10 absolute -bottom-[5.6px] h-[16px] w-[16px] p-[1px] bg-[#34424B] rotate-45"></div>
        <div className="-z-10 absolute -bottom-[7px] h-[16px] w-[16px] p-[1px] bg-primary rotate-45">
          <div className="bg-[#34424B] w-full h-full">&nbsp;</div>
        </div>
      </div>
    </motion.div>
  )
}