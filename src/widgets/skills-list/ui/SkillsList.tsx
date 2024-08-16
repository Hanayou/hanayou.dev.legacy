"use client";

import SkillCard from './SkillCard'
import { FullStackDevelopment } from '../icons/FullStackDevelopment'
import { CloudArchitect } from '../icons/CloudArchitect'
import { motion } from 'framer-motion'

export default function SkillsList() {
  const cards = [
    {
      icon: <FullStackDevelopment fontSize={100} />,
      title: 'Full-Stack Development',
      description: 'This is a little bit of text describing what I do in this little psace of text where I can fitr in in.'
    },
    {
      icon: <CloudArchitect fontSize={100} />,
      title: 'Full-Stack Development',
      description: 'This is a little bit of text describing what I do in this little psace of text where I can fitr in in.'
    },
    {
      icon: <FullStackDevelopment fontSize={100} />,
      title: 'Full-Stack Development',
      description: 'This is a little bit of text describing what I do in this little psace of text where I can fitr in in.'
    },
    {
      icon: <CloudArchitect fontSize={100} stroke='1.0' />,
      title: 'Full-Stack Development',
      description: 'This is a little bit of text describing what I do in this little psace of text where I can fitr in in.'
    },
    {
      icon: <FullStackDevelopment fontSize={100} />,
      title: 'Full-Stack Development',
      description: 'This is a little bit of text describing what I do in this little psace of text where I can fitr in in.'
    },
    {
      icon: <CloudArchitect fontSize={100} stroke='1.0' />,
      title: 'Full-Stack Development',
      description: 'This is a little bit of text describing what I do in this little psace of text where I can fitr in in.'
    }
  ]

  return (
    <div
      className=' justify-center grid grid-cols-[repeat(auto-fit,_400px)] w-full px-[38px] gap-[40px]'
    >
      {cards.map((card, index) => (
        <div>
          <SkillCard {...card} />
        </div>
      ))}
    </div>
  )
}
