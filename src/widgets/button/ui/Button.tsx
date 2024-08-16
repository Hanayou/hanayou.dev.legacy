import { cn } from "@/shared/lib/utils";

export type TButtonProps = {
  text?: string;
  glow?: boolean;
  size?: 'small' | 'default';
  hasIcon?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export default function PrimaryButton({text = "", size = "default", glow = true, hasIcon = false, icon, disabled}: TButtonProps) {
  return (
    <button disabled={disabled} className="w-fit rounded-[0.75rem] text-[1.5rem] p-[0.0625rem] bg-gradient-to-r from-[#FFF] from-0% to-[#FF3E00] to-100% drop-shadow-[0_0_40px_rgba(255,62,0,1)] transition-all duration-500 disabled:pointer-events-none disabled:opacity-50 disabled:drop-shadow-none">
      <div className={cn("relative px-[2rem] py-[1.25rem] gap-[10px] rounded-[0.75rem] bg-gradient-to-br from-[#FF5B00] from-50% to-[#FF7C34] to-50% text-white",
        {
          "text-base px-[1.25rem] py-[0.75rem]": size === "small",
          "flex items-center justify-center gap-x-[0.625rem]": hasIcon,
        }
      )}>
        {hasIcon && icon}
        <span>{text}</span>
      </div>
    </button>
  )
}
