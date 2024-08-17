"use client";

import { motion } from 'framer-motion'
import Milestone from './Milestone';
import { useState } from 'react';

export default function SkillProgressBar({ skillName, skillLevelPercent, skillLevelText, milestones }: TSkillProgressBar) {
  const [animationProgress, setAnimationProgress] = useState(0);

  return (
    <div className="w-full px-[38px] grid grid-rows-3 gap-y-1">
      <span className="text-left">{skillName}</span>
      <div className="grid grid-cols-1 grid-rows-1 h-[14px] bg-white/50 rounded-full">
        <motion.div
          className="rounded-full bg-primary"
          initial={{ width: 0 }}
          transition={{ duration: 2.0, type: 'keyframes', ease: 'easeInOut' }}
          whileInView={{ width: `${skillLevelPercent}%` }}
          viewport={{ once: true }}
          onUpdate={(latest) => {
            // Convert the width to a number if it's a string
            const width = typeof latest.width === 'string' ? parseFloat(latest.width) : latest.width;
            setAnimationProgress(width);
          }}
        />
        <div className='relative w-full h-full'>
          {
            milestones?.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, y: 50 }}
                animate={{ 
                  opacity: animationProgress >= milestone.achievedPercentage ? 1 : 0,
                  scale: animationProgress >= milestone.achievedPercentage ? 1 : 0,
                  y: animationProgress >= milestone.achievedPercentage ? 0 : 50,
                }}
                transition={{ duration: 1.0, type: 'spring'}}
                className={`absolute left-[${milestone.achievedPercentage}%] translate-x-[-50%] bottom-[25px]`}
              >
                <Milestone {...milestone} />
              </motion.div>
            ))
          }
        </div>
      </div>
      <span className="text-right row-start-3 row-span-1 opacity-50">{skillLevelText}</span>
    </div>
  )
}