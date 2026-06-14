"use client";

import { HeroUIProvider as Provider } from "@heroui/react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export function HeroUIProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  return <Provider navigate={router.push}>{children}</Provider>;
}
