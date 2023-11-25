import React from "react";
import styles from "@/app/ui/home.module.css";

const TopBar: React.FC = () => {
  return (
    <div className={`text-white py-2 text-center ${styles.topBar}`}>
      <p>Visit us on TikTok @braveland.com</p>
    </div>
  );
};

export default TopBar;
