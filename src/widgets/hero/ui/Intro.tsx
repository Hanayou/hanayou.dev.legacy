"use client";

import PrimaryButton from "@/widgets/button/ui/Button";
import SocialLinks from "@/widgets/social-links/ui/SocialLinks";
import { motion } from "framer-motion"
import Link from "next/link";

export default function Intro() {

  return (
    <motion.div
      className="flex flex-col items-center lg:items-start text-center lg:text-left gap-y-[2.6875rem] py-[1.5625rem] px-[38px]"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <h3>Hi, I&apos;m <span className="text-primary">Sam</span></h3>
      <h1>Software<br/><span className="text-primary">Engineer /&gt;</span></h1>
      <p className="max-w-[30.75rem]">Passionate engineer with over 5 years of professional development and consulting experience. Always looking to expand knowledge and develop exciting, cutting edge products.</p>
      <Link href="/projects">
        <PrimaryButton text="See My Projects" size="small" hasIcon={false} icon={<div />} />
      </Link>
      <SocialLinks />
    </motion.div>
  )
}
