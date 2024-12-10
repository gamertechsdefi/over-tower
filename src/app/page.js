'use client'

import CommunitySection from "@/components/Community";
import FooterNav from "@/components/FooterNav";
import GameFeatures from "@/components/GameCard";
import GameFAQ from "@/components/GameFAQ";
import GameModes from "@/components/GameModes";
import GameRoadmap from "@/components/GameRoadMap";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "VeniteAdoremus, sans-serif" }}>
      <main>
        <MainSection />
        <FooterNav />
      </main>
    </div>
  );
}

function MainSection() {
  return (
    <div>
      <section className="relative h-screen">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 after:absolute after:inset-0 after:bg-black/50"
          style={{
            backgroundImage: "url(/images/game-asset-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />

        {/* Content */}
        <div
          className="relative h-full flex flex-col items-center justify-center gap-6 text-center px-4 md:px-16"
          style={{ fontFamily: 'VeniteAdoremus, sans-serif' }}
        >
          <h1 className="text-5xl md:text-8xl font-bold text-green-300 drop-shadow-lg">
            Conquer & Earn
          </h1>

          <p className="text-sm md:text-base text-white max-w-2xl drop-shadow-md">
            Welcome to the ultimate play-to-earn tower defense experience where strategy meets blockchain
            gaming. Command your forces, protect your tower, and earn rewards in intense PvP battles.
          </p>

          <Link
            href=""
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Join the game
          </Link>
        </div>
      </section>
      <GameFeatures />
      <GameModes />
      <GameRoadmap />
      <GameFAQ />
      <CommunitySection />
    </div>
  );
}
