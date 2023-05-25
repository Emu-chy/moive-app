import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbar.module.css";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src="/logo2.png" alt="this logo" height={50} width={200} />
                </Link>
            </div>
            <Nav />
        </header>
    );
};

export default Header;
