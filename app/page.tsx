"use client";
import TopBar from "./ui/topBar";
import Header from "./ui/header";
import HeroSection from "./ui/heroSection";
import Carousel from "./ui/carousel/index";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <TopBar />
      <Header />
      <HeroSection />
      <Carousel />
    </main>
  );
}
