"use client";

import { motion, useInView } from "framer-motion";
import { Calendar, HeartHandshake, MapPinned, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { assetPaths } from "@/lib/constants";

function AnimatedCounter({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.ceil(end / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

function TypewriterText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setIsFinished(true);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [inView, text]);

  return (
    <span ref={ref}>
      {displayed}
      {inView && !isFinished ? <span className="animate-pulse">|</span> : null}
    </span>
  );
}

type StatValue =
  | { type: "counter"; end: number; prefix?: string; suffix?: string }
  | { type: "typewriter"; text: string };

const stats: {
  label: string;
  value: StatValue;
  icon: React.ComponentType<{ size?: number }>;
  image: string;
  subtitle?: string;
}[] = [
  {
    label: "Colaboradores",
    value: { type: "counter", end: 600, prefix: "+" },
    icon: Users,
    image: assetPaths.pineDetail,
  },
  {
    label: "Cliente preferencial",
    value: { type: "typewriter", text: "Smurfit WestRock" },
    icon: HeartHandshake,
    image: assetPaths.eucalyptus,
  },
  {
    label: "Norte, Centro y Sur",
    value: { type: "counter", end: 3, suffix: " zonas" },
    icon: MapPinned,
    image: assetPaths.hero,
  },
  {
    label: "Trayectoria empresarial",
    value: { type: "typewriter", text: "Desde 2010" },
    icon: Calendar,
    image: assetPaths.verticalForest,
  },
];

function renderValue(value: StatValue) {
  if (value.type === "counter") {
    return <AnimatedCounter end={value.end} prefix={value.prefix || ""} suffix={value.suffix || ""} />;
  }
  if (value.type === "typewriter") {
    return <TypewriterText text={value.text} />;
  }
  return null;
}

export function HomeQuickStats() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_30%_40%,#eef7ef_0%,#f7f4ec_50%,#ffffff_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-forest-100/40 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-forest-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-[2rem] border border-forest-100 bg-white/70 p-6 text-center shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-forest-500 hover:shadow-soft"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-700 group-hover:opacity-30"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                <div className="relative z-10">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-50 text-forest-700 transition group-hover:bg-forest-700 group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <p className="font-alegreya text-4xl font-bold tracking-tight text-forest-900">
                    {renderValue(item.value)}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-forest-600/80">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
