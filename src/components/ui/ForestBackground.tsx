import Image from "next/image";
import type { ReactNode } from "react";

type ForestBackgroundProps = {
  image: string;
  children: ReactNode;
  className?: string;
};

export function ForestBackground({ image, children, className = "" }: ForestBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        fill
        sizes="100vw"
        src={image}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
