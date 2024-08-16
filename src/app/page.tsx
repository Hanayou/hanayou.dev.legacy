import Intro from '@/widgets/hero/ui/Intro';
import ProfileImage from '@/widgets/hero/ui/ProfileImage';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <div className="flex flex-col-reverse lg:grid lg:grid-rows-1 lg:grid-cols-2 mt-[225px] lg:mt-0 h-auto lg:h-[1080px] items-center">
          <Intro />
          <ProfileImage />
        </div>

        <div className='flex flex-col items-center text-center'>
          <h2>My <span className="text-primary">Skills</span></h2>
          <p>GRID</p>
          <h4 className="font-bold uppercase tracking-[0.5em]">languages</h4>
        </div>
      </main>
        
      {/* Background Country Image */}
      <div className="-z-50 absolute top-0 left-0 w-screen h-[350px] lg:h-[1080px] lg:grid grid-cols-[1fr_683px_150px_383px_150px_1fr]"> 
        <div className="absolute col-start-3 col-span-4 w-full h-full bg-bgPrimary overflow-hidden">
          <Image
            src="/japan.png"
            alt="Japan"
            fill={true}
            objectFit='cover'
            className="col-start-3 col-span-4 blur-[2px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
        </div>
        <div className="z-0 col-start-3 col-span-1 w-full h-full bg-bgPrimary"></div>
        <div className="col-start-4 col-span-1 w-full h-full clip-custom bg-bgPrimary"></div>
      </div>
    </>
  );
}