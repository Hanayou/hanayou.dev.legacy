export default function SkillCard({ icon, title, description }: TSkillCard) {
  return (
    <div className='flex flex-col items-center bg-bgHighlight rounded-xl p-[50px] gap-y-[20px] drop-shadow-[4px_0px_12px_rgba(0,0,0,0.25)]'>
      <div className='text-primary'>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
