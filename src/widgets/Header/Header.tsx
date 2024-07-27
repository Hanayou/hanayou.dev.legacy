import Link from "next/link";
import { House, Laptop, Mail } from "lucide-react"

export const Header = () => {
  const routes = [
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
  ];

  return (
    <header>
      <nav>
        <ul className="flex justify-between">
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>
                <div className="flex items-center space-x-1">
                  {route.icon}
                  <span>{route.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}