import { TNavigation } from "@/widgets/navigation/model/navigation";
import { NavigationItem } from "@/widgets/navigation/ui/NavigationItem";

export const Navigation = (props: TNavigation) => {
  return (
    <nav>
      <ul className="z-50 fixed top-[50px] left-[50%] translate-x-[-50%] w-fit px-8 py-3 flex gap-x-[50px] rounded-full bg-bgPrimary/80 backdrop-blur-md ">
        {props.items.map((item) => (
          <NavigationItem key={item.path} {...item} />
        ))}
      </ul>
    </nav>
  );
}