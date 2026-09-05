import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      alt="MCUBES Consultancy"
      className={cn("h-auto w-auto object-contain", className)}
      height={510}
      priority
      src="/images/mcubes-logo.png"
      width={678}
    />
  );
}
