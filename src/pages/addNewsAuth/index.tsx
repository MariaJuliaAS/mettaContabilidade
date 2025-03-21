import styles from "../../styles/addNewsAuth.module.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useNavigate } from "react-router-dom";
import imgCalculator from "../../assets/undraw_calculator_21hp.png";

interface AuthProps {
    email: string;
    password: string;
}

export function AddNewsAuth() {
    const navigate = useNavigate()
    const [authInput, setAuthInput] = useState<AuthProps>({
        email: "",
        password: ""
    })

    async function login(event: React.FormEvent) {
        event.preventDefault()

        await signInWithEmailAndPassword(auth, authInput.email, authInput.password)
            .then(() => {
                alert("usuário logado")
                navigate("/addNews", { replace: true })
            })
            .catch((error) => {
                console.log("Erro ao logar usuário: " + error)
            })
    }

    return (
        <main className={styles.addNewsAuthContainer}>
            <section className={styles.addNewsAuthContent}>

                <div className={styles.loginArea}>
                    <h1>Login</h1>
                    <form onSubmit={login}>
                        <input
                            type="text"
                            placeholder="Email"
                            value={authInput.email}
                            onChange={(e) => setAuthInput(prev => ({ ...prev, email: e.target.value }))}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={authInput.password}
                            onChange={(e) => setAuthInput(prev => ({ ...prev, password: e.target.value }))}
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </div>

                <div className={styles.imgArea}>
                    <img src={imgCalculator} alt="Desenho de calculadora" />
                </div>

            </section>
        </main>
    )
}