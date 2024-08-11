import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <div className="grid grid-cols-2 h-[1080px] items-center">
          <div className="flex flex-col gap-y-[2.6875rem] py-[1.5625rem] px-[2.375rem]">
            <h3>Hi, I'm <span className="text-primary">Sam</span></h3>
            <h1>Software<br/><span className="text-primary">Engineer /&gt;</span></h1>
            <p className="max-w-[30.75rem]">Passionate engineer with over 5 years of professional development and consulting experience. Always looking to expand knowledge and develop exciting, cutting edge products.</p>
            <button>See My Projects</button>
            <div>Social Links Component</div>
          </div>
          
          <div className='m-auto z-0 relative w-[21.875rem] h-[21.875rem] bg-bgPrimary rounded-full'>
            <div className='absolute -z-10 pointer-events-none top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[114.6875rem] h-[98.9375rem] bg-[radial-gradient(40.00%_40.00%_at_50.00%_50.00%,rgba(113,202,252,0.30)_0%,rgba(58,66,79,0.00)_100%)] opacity-[72%]'></div>
            <div className='absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[20rem] h-[20rem] rounded-full bg-primary'>
              <Image src="/sam.png" alt="Sam" width={1000} height={1000} className='absolute translate-y-[-85px] rounded-full'/>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center text-center'>
          <h2>My <span className="text-primary">Skills</span></h2>
          <p>GRID</p>
          
          <h4 className="font-bold uppercase tracking-[0.5em]">languages</h4>
        </div>
      </main>

       {/* TODO: Add gradient overlay to image */}
      <div className="-z-50 absolute top-0 left-0 w-screen h-[1080px] grid grid-cols-[1fr_683px_150px_383px_150px_1fr]"> 
        <div className="absolute col-start-3 col-span-4 w-full h-full bg-bgPrimary overflow-hidden">
          <Image
            src="/japan.png"
            alt="Japan"
            fill={true}
            objectFit='cover'
            className="col-start-3 col-span-4 blur-[2px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/63 to-transparent"></div>
        </div>
        <div className="z-0 col-start-3 col-span-1 w-full h-full bg-bgPrimary"></div>
        <div className="col-start-4 col-span-1 w-full h-full clip-custom bg-bgPrimary"></div>
      </div>
    </>
  );
}

/* CountryBG */

// position: absolute;
// width: 998.08px;
// height: 1089px;
// left: 1064.94px;
// top: -9px;

// background: linear-gradient(113.14deg, rgba(0, 0, 0, 0.8) 27.48%, rgba(0, 0, 0, 0.63) 34.72%, rgba(0, 0, 0, 0) 80.93%), url(japan.jpg);
// filter: blur(2px);
/* CountryBG */