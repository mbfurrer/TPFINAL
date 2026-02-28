import { useState } from "react";
import { useNavigate } from "react-router";

import "./LoginScreen.css";

export default function LoginScreen({ onLogin }) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            onLogin();        
            navigate("/");   
        }
    };



    return (
        <div className="login-screen">

            <div className="login-logo">
            <i class="bi bi-whatsapp login-icon"></i>
            <h1>WhatsApp</h1>
            </div>

            <div className="login-download">

                <i class="bi bi-cloud-download"></i>
                <div className="login-download-text">
                <h1>Download WhatsApp</h1>
                <span>Make calls and get a faster experience when you download the app.</span>
                </div>
                <a href="https://www.whatsapp.com/download"
                    target="_blank"
                    className="login-download-btn">
                    Download
                </a>
            </div>


            <div className="login-card">
                <p>Iniciar sesión</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </div>
    );
}