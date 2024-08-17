import BackgroundGradient from '@/widgets/background-gradient/ui/BackgroundGradient';
import Heading from '@/widgets/heading/ui/Heading';
import CountryBackground from '@/widgets/hero/ui/CountryBackground';
import Intro from '@/widgets/hero/ui/Intro';
import ProfileImage from '@/widgets/hero/ui/ProfileImage';
import SkillProgressBar from '@/widgets/skill-progress-bar/ui/SkillProgressBar';
import SkillsList from '@/widgets/skills-list/ui/SkillsList';


export default function Home() {
  return (
    <>
      <main>
        <div className="flex flex-col-reverse lg:grid lg:grid-rows-1 lg:grid-cols-2 mt-[225px] lg:mt-0 h-auto lg:h-[1080px] items-center">
          <Intro />
          <ProfileImage />
        </div>

        <div className='flex flex-col items-center text-center py-[120px] gap-y-[120px]'>
          <Heading>
            <h2>My <span className="text-primary">Skills</span></h2>
          </Heading>
          <SkillsList />

          <h4 className="relative font-bold uppercase tracking-[0.5em]">languages{/* <BackgroundGradient /> */}</h4>
          <section className='w-full flex flex-col gap-y-[50px]'>
            <SkillProgressBar skillName='English' skillLevelPercent={100} skillLevelText='Native' />
            <SkillProgressBar
              skillName='Japanese'
              skillLevelPercent={80}
              skillLevelText='Business Level'
              milestones={[
                { title: 'JLPT N5', description: 'Passed the Japanese Language Proficient Test (JLPT) N5 level.', date: new Date('2013-12-01'), achievedPercentage: 20 },
                { title: 'JLPT N3', description: 'Passed the Japanese Language Proficient Test (JLPT) N3 level.', date: new Date('2014-12-01'), achievedPercentage: 40 },
                { title: 'JLPT N2', description: 'Passed the Japanese Language Proficient Test (JLPT) N2 level.', date: new Date('2018-12-01'), achievedPercentage: 75 },
              ]}
            />
          </section>
        </div>

        <div className='flex flex-col items-center text-center py-[120px] gap-y-[120px]'>
          <Heading>
            <h2 className='px-4'>Professional <span className="text-primary">Experience</span></h2>
          </Heading>
          
        </div>
      </main>
        
      <CountryBackground />
    </>
  );
}