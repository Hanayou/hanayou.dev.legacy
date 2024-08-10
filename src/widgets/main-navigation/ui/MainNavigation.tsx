import { TNavigationItem } from '@/widgets/navigation/model/navigationItem';
import { Navigation } from '@/widgets/navigation/ui/Navigation';
import { House, Laptop, Mail, Settings } from 'lucide-react';

export default function MainNavigation() {
  const routes: TNavigationItem[] = [
    {
      icon: <House />,
      label: 'Home',
      path: '/'
    },
    {
      icon: <Laptop />,
      label: 'Projects',
      path: '/projects'
    },
    {
      icon: <Mail />,
      label: 'Contact',
      path: '/contact'
    },
    {
      icon: <Settings />,
      label: 'Settings',
      path: '/settings'
    }
  ];

  return (
    <header>
      <Navigation items={routes} />
    </header>
  )
}
