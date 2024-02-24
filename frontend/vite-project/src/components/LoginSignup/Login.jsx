import React, {useState} from "react";
import './LoginSignup.css';
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";


export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
       
    }

    return(
        <div className="container">
            <div className="header">
                <h2>Login</h2>
            </div>
            <div className="form">
                <form onSubmit={handleLogin}>
                    <div>
                        <img src={email_icon} alt="email icon" />
                        <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    </div>
                    <div>
                        <img src={password_icon} alt="password icon" />
                        <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                    </div>
                </form>
                <button type="submit">Login</button>
            </div>
        </div>
        
    )

}