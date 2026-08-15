import Image from "next/image";
import { LOGOS, LOGO_INTRINSIC, type LogoVariant } from "@/lib/brand";

export default function EmzLogo({
  variant = "white",
  className,
  preload,
  decorative = false,
  sizes = "128px",
}: {
  variant?: LogoVariant;
  className?: string;
  preload?: boolean;
  decorative?: boolean;
  sizes?: string;
}) {
  const size = LOGO_INTRINSIC[variant];

  return (
    <Image
      src={LOGOS[variant]}
      alt={decorative ? "" : "EMZ Sport & Fitness"}
      width={size.width}
      height={size.height}
      className={className}
      preload={preload}
      sizes={sizes}
    />
  );
}
