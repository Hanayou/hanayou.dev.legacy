import Image from 'next/image'

export default function CountryBackground() {
  return (
    <div className="-z-50 absolute top-0 left-0 w-screen h-[350px] lg:h-[1080px] lg:grid grid-cols-[1fr_683px_150px_383px_150px_1fr]"> 
      <div className="absolute col-start-4 col-span-3 w-full h-full bg-bgPrimary overflow-hidden">
        <Image
          src="/japan.png"
          alt="Japan"
          fill={true}
          objectFit='cover'
          className="col-start-4 col-span-3 blur-[2px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
      </div>
      <div className="z-0 col-start-3 col-span-1 w-full h-full bg-bgPrimary"></div>
      <div className="col-start-4 col-span-1 w-full h-full clip-custom bg-bgPrimary"></div>
    </div>
  )
}
