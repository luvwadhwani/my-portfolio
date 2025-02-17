import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Resume</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
