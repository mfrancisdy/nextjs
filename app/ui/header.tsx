import React, { useState, useEffect } from "react";
import styles from "@/app/ui/header.module.css";
import Image from "next/image";
import {
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaUser,
  FaSearch,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 767);
    };

    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      // window.removeEventListener("resize", handleResize);
      // window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.leftMenus}>
        {isMobile ? (
          <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
            <FaBars />
          </div>
        ) : (
          <ul className={styles.desktopMenu}>
            <li>brands</li>
            <li>shops</li>
            <li>premium</li>
            <li>gift cards</li>
          </ul>
        )}
      </div>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>
      <div className={styles.rightIcons}>
        <ul>
          {isMobile ? (
            <>
              <li className={styles.searchIcon}>
                <FaSearch />
              </li>
              <li>
                <FaShoppingCart />
              </li>
            </>
          ) : (
            <>
              <li className={styles.desktopAffiliateLink}>
                <a href="#">become an affiliate</a>
              </li>
              <li>
                <FaTwitter size={18} />
              </li>
              <li>
                <FaTiktok />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaUser />
              </li>
              <li className={styles.searchIcon}>
                <FaSearch />
              </li>
              <li>
                <FaShoppingCart />
              </li>
            </>
          )}
        </ul>
      </div>
      {isMobile && isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>brands</li>
            <li>shops</li>
            <li>premium</li>
            <li>gift cards</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
