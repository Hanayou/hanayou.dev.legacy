"use client";

import PrimaryButton from "@/widgets/button/ui/Button";
import SocialLinks from "@/widgets/social-links/ui/SocialLinks";
import { motion} from "framer-motion"

export default function Intro() {

  return (
    <motion.div
      className="flex flex-col items-center lg:items-start text-center lg:text-left gap-y-[2.6875rem] py-[1.5625rem] px-[2.375rem]"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <h3>Hi, I'm <span className="text-primary">Sam</span></h3>
      <h1>Software<br/><span className="text-primary">Engineer /&gt;</span></h1>
      <p className="max-w-[30.75rem]">Passionate engineer with over 5 years of professional development and consulting experience. Always looking to expand knowledge and develop exciting, cutting edge products.</p>
      <PrimaryButton text="See My Projects" size="small" hasIcon={false} icon={<div />} />
      <SocialLinks />
    </motion.div>
  )
}
