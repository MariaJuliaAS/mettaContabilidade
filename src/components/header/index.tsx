import styles from '../../styles/header.module.css';
import logo from '../../assets/logoRedonda.png';
import { useState, useEffect } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation();

    useEffect(() => {

        const handleScroll = () => {

            setIsScrolled(window.scrollY > window.innerHeight - 20 ? true : false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    const newsPage = matchPath("/news/:id", location.pathname)

    const headerLocation = location.pathname === '/addNews' ||
        location.pathname === "/addNewsAuth" ||
        newsPage

    return (
        <header className={isScrolled || headerLocation ? styles.headerContainerScrolled : styles.headerContainer}
        >
            <div className={styles.logoHeader}>
                <a href="/#firstScreen">
                    <img src={logo} alt="Logo" />
                </a>
            </div>

            <nav className={styles.navHeader}>
                <ul>
                    <li><a href='/#whoAreWe'>Quem somos?</a></li>
                    <li><a href='/#ourServices'>Nossos serviços</a></li>
                    <li><a href='/#businessNews'>Notícias empresariais</a></li>
                    <li><a href='/#contactUs'>Fale conosco</a></li>
                </ul>
            </nav>
        </header>
    )
}