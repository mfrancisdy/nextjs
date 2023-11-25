import React from "react";
import styles from "@/app/ui/home.module.css";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      <div
        className={`absolute inset-0 z-0 overflow-hidden ${styles.zoomInWrapper}`}
      >
        <div
          className={`absolute inset-0 bg-cover bg-center ${styles.zoomIn}`}
          style={{ backgroundImage: "url('bg1.png')" }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div
        className={`container mx-auto z-10 text-white ${styles.heroContainer}`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Heritage</h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hoodies</h1>
        <button
          className={`px-6 py-3 rounded-full transition duration-300 ${styles.shopNowButton}`}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
