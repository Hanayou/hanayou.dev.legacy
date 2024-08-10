import { TNavigation } from "@/widgets/navigation/model/navigation";
import { NavigationItem } from "@/widgets/navigation/ui/NavigationItem";

export const Navigation = (props: TNavigation) => {
  return (
    <nav>
      <ul className="w-fit m-auto px-8 py-3 flex gap-x-[3.125rem]">
        {props.items.map((item) => (
          <NavigationItem key={item.path} {...item} />
        ))}
      </ul>
    </nav>
  );
}