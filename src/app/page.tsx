import Heading from '@/widgets/heading/ui/Heading';
import CountryBackground from '@/widgets/hero/ui/CountryBackground';
import Intro from '@/widgets/hero/ui/Intro';
import ProfileImage from '@/widgets/hero/ui/ProfileImage';
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
         


          <h4 className="font-bold uppercase tracking-[0.5em]">languages</h4>
        </div>
      </main>
        
      <CountryBackground />
    </>
  );
}