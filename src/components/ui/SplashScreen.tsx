"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (sessionStorage.getItem("efagram-loaded")) {
      setShow(false);
      return;
    }

    timerRef.current = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("efagram-loaded", "true");
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-forest-900 transition-opacity duration-700 ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <Image
        alt="EFAGRAM S.A.S."
        className="h-auto w-auto animate-pulse"
        height={80}
        src="/images/logo-efagram-white.webp"
        width={280}
        priority
      />
    </div>
  );
}
