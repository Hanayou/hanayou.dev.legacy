import React, { useState, useEffect, useRef } from 'react';

const SkillCard = ({ icon, title, description }: TSkillCard) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cardRef.current) {
        const rect = (cardRef.current as any).getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(155,155,255,0.8) 0%, rgba(58,66,79,0.00) 100%)`,
  };

  return (
    <div
      ref={cardRef}
      className="grid h-full bg-fixed bg-cover rounded-xl p-[1px] drop-shadow-[4px_0px_12px_rgba(0,0,0,0.25)]"
      style={gradientStyle}
    >
      <div className="flex flex-col items-center bg-bgHighlight rounded-xl p-[50px] gap-y-[20px] opacity-95 backdrop-blur-xl">
        <div className='text-primary'>
          {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;