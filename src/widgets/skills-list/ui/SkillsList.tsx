"use client";

import SkillCard from './SkillCard'
import { FullStackDevelopment } from '../icons/FullStackDevelopment'
import { CloudArchitect } from '../icons/CloudArchitect'
import { motion } from 'framer-motion'
import { MobileDevelopment } from '../icons/MobileDevelopment';
import { SolutionsConsulting } from '../icons/SolutionsConsulting';
import { GameDevelopment } from '../icons/GameDevelopment';
import { UIUXDesign } from '../icons/UIUXDesign';

const container = {
  hidden: { opacity: 1, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.15,
    }
  }
};

const item = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function SkillsList() {
  const cards = [
    {
      icon: <FullStackDevelopment fontSize={100} />,
      title: 'Full-Stack Development',
      description: 'This is a little bit of text describing what I do in this little psace of text where I can fitr in in.'
    },
    {
      icon: <CloudArchitect fontSize={100} />,
      title: 'Cloud Architect',
      description: 'This is a little bit of text describing what I do in this little psace of text where I can fitr in in.'
    },
    {
      icon: <UIUXDesign fontSize={100} />,
      title: 'UI/UX Design',
      description: 'This is a little bit of text describing what I do in this little psace of text where I can fitr in in.'
    },
    {
      icon: <MobileDevelopment fontSize={100} stroke='1.0' />,
      title: 'Mobile Development',
      description: 'This is a little bit of text describing what I do in this little psace of text where I can fitr in in.'
    },
    {
      icon: <SolutionsConsulting fontSize={100} />,
      title: 'Solutions Consulting',
      description: 'This is a little bit of text describing what I do in this little psace of text where I can fitr in in.'
    },
    {
      icon: <GameDevelopment fontSize={100} stroke='1.0' />,
      title: 'Game Development',
      description: 'This is a little bit of text describing what I do in this little psace of text where I can fitr in in.'
    },
  ];

  return (
    <motion.div
      className='justify-center grid grid-cols-[repeat(auto-fit,_400px)] w-full px-[38px] gap-[40px]'
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {cards.map((card, index) => (
        <motion.div key={index} variants={item}>
          <SkillCard {...card} />
        </motion.div>
      ))}
    </motion.div>
  );
}
