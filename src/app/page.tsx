import { HomeHero } from "@/components/sections/HomeHero";
import { HomeQuickLinks } from "@/components/sections/HomeQuickLinks";
import { HomeQuickStats } from "@/components/sections/HomeQuickStats";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeQuickStats />
      <HomeQuickLinks />
    </>
  );
}
