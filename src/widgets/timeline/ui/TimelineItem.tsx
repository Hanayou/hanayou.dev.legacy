"use client";

import { CalendarDays, ChevronDown, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const TimelineItem = ({ companyLogo, jobTitle, startDate, endDate, location, content }: TTimelineItem) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`w-full p-3 bg-bgHighlight rounded-[12px] shadow-xl cursor-pointer transition-all duration-300 ${
        isExpanded
          ? 'border border-orange-500 shadow-lg'
          : 'border-transparent'
      }`}
      onClick={handleExpand}
    >
      <div className="flex items-center justify-between">
        <Image src="/nintex.png" alt={companyLogo} width={0} height={0} sizes="100vw" className='w-auto h-[40px]' />
        <div className='flex gap-4'>
          <span>{jobTitle}</span>
          <div
            className={`text-2xl transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          >
            <ChevronDown />
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className='pt-3'>
          <div className="flex items-center text-primary gap-4">
            <CalendarDays size={18} />
            <span>
              {endDate
                ? `${startDate.toLocaleDateString(navigator.language, {
                    month: 'long',
                    year: 'numeric',
                  })} - ${endDate.toLocaleDateString(navigator.language, {
                    month: 'long',
                    year: 'numeric',
                  })}`
                : `${startDate.toLocaleDateString(navigator.language, {
                    month: 'long',
                    year: 'numeric',
                  })} - Present`}
            </span>
          </div>
          <div className="flex items-center text-primary gap-4">
            <MapPin size={18} />
            <span>{location}</span>
          </div>
          <div className="text-white text-left pt-3">{content}</div>
        </div>
      )}
    </div>
  );
};

export default TimelineItem;