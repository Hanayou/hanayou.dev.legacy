type TSkillProgressBar = {
  skillName: string;          // e.g. "English"
  skillLevelPercent: number;  // 0-100
  skillLevelText: string;     // e.g. "Native" 
  milestones?: TMilestone[];
};