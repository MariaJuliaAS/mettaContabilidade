import styles from '../../styles/footer.module.css';
import githubLog from '../../assets/github-logo.png';
import linkedinLogo from '../../assets/linkedin.png';
// import { FaArrowUp } from "react-icons/fa6";

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.infosFooter}>
                <span>Desenvolvido por Maria Júlia © 2025</span>

                <div className={styles.footerLinks}>
                    <a href="https://github.com/MariaJuliaAS" target='_blank'><img src={githubLog} alt="Logo github" /></a>
                    <a href="https://www.linkedin.com/in/maria-julia-araujo/" target='_blank'><img src={linkedinLogo} alt="Logo linkedin" /></a>
                </div>

            </div>
        </footer>
    )
}