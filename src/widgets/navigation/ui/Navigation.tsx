import { TNavigation } from "@/widgets/navigation/model/navigation";
import { NavigationItem } from "@/widgets/navigation/ui/NavigationItem";

export const Navigation = (props: TNavigation) => {
  return (
    <nav>
      <ul className="z-50 fixed top-[3.125rem] left-[50%] translate-x-[-50%] w-fit m-auto px-8 py-3 flex gap-x-[3.125rem] rounded-full bg-bgPrimary/80 backdrop-blur-2xl">
        {props.items.map((item) => (
          <NavigationItem key={item.path} {...item} />
        ))}
      </ul>
    </nav>
  );
}