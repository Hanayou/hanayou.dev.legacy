import { Devto } from '@/widgets/social-links/ui/icons/Devto';
import { GitHub } from '@/widgets/social-links/ui/icons/GitHub';
import { Leetcode } from '@/widgets/social-links/ui/icons/Leetcode';
import { LinkedIn } from '@/widgets/social-links/ui/icons/LinkedIn';
import { YouTube } from '@/widgets/social-links/ui/icons/YouTube';

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: <GitHub fontSize={32} />,
      url: 'https://github.com/Hanayou/',
    },
    {
      icon: <Leetcode fontSize={32} />,
      url: 'https://leetcode.com/u/Hanayou/',
    },
    {
      icon: <Devto fontSize={32} />,
      url: 'https://dev.to/hanayou',
    },
    {
      icon: <LinkedIn fontSize={32} />,
      url: 'https://www.linkedin.com/in/samuel-short/',
    },
    {
      icon: <YouTube fontSize={32} />,
      url: 'https://www.youtube.com/@HanayouDev',
    },
  ];

  return (
    <ul className="flex py-[10px] gap-x-[20px]">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noreferrer">
            <div className="text-white w-full h-full opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-150">
              {link.icon}
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
