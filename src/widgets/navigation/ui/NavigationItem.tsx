"use client";

import { TNavigationItem } from "@/widgets/navigation/model/navigationItem";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import { usePathname } from "next/navigation";

export const NavigationItem = (props: TNavigationItem) => {
  const pathname = usePathname();

  return (
    <li key={props.path}>
      <Link href={props.path}>
        <div className={cn(
          "flex flex-col items-center justify-center max-w-[60px]",
          { "text-primary": pathname === props.path },
        )}>
          <div className="m-auto">{props.icon}</div>
          <span className="text-base">{props.label}</span>
        </div>
      </Link>
    </li>
  );
}