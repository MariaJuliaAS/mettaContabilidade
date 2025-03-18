import styles from '../../styles/header.module.css';
import logo from '../../assets/logoCortada.png';
import { useState, useEffect } from 'react';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {

            setIsScrolled(window.scrollY > window.innerHeight ? true : false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    return (
        <header className={isScrolled ? styles.headerContainerScrolled : styles.headerContainer}
        >
            <div className={styles.logoHeader}>
                <a href="#firstScreen">
                    <img src={logo} alt="Logo" />
                </a>
            </div>

            <nav className={styles.navHeader}>
                <ul>
                    <li><a href='#whoAreWe'>Quem somos?</a></li>
                    <li><a href='#ourServices'>Nossos serviços</a></li>
                    <li><a href='#businessNews'>Notícias empresariais</a></li>
                    <li><a>Fale conosco</a></li>
                </ul>
            </nav>
        </header>
    )
}