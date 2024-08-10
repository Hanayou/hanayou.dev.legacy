import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex h-[1080px] items-center">
        <div className="flex flex-col gap-y-[2.6875rem] py-[1.5625rem] px-[2.375rem]">
          <h3>Hi, I'm <span className="text-primary">Sam</span></h3>
          <h1>Software<br/><span className="text-primary">Engineer /&gt;</span></h1>
          <p className="max-w-[30.75rem]">Passionate engineer with over 5 years of professional development and consulting experience. Always looking to expand knowledge and develop exciting, cutting edge products.</p>
          <button>See My Projects</button>
          <div>Social Links Component</div>
        </div>
        
        <div className='m-auto relative w-[21.875rem] h-[21.875rem] bg-bgPrimary rounded-full'>
          <div className='absolute -z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[114.6875rem] h-[98.9375rem] bg-[radial-gradient(40.00%_40.00%_at_50.00%_50.00%,rgba(113,202,252,0.30)_0%,rgba(58,66,79,0.00)_100%)] opacity-[72%]'></div>
          <div className='absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[20rem] h-[20rem] rounded-full bg-primary'>
            <Image src="/sam.png" alt="Sam" width={1000} height={1000} className='absolute translate-y-[-85px] rounded-full'/>
          </div>
        </div>
      </main>


      {/* <div className="absolute top-0 left-0 w-screen h-screen">
        <div className="relative top-0 right-0 w-[850px] h-screen">
          <svg width="0" height="0">
            <defs>
              <mask id="custom-mask">
                <path d="M299,0 L1000,0 L1000,1000 L0,1000 Z" fill="white" />
              </mask>
            </defs>
          </svg>
          <Image src="/japan.png" alt="Japan" width={1000} height={1000} className='-z-10 blur-sm'
          style={{ mask: 'url(#custom-mask)', WebkitMask: 'url(#custom-mask)' }}/>
        </div>
      </div> */}
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
