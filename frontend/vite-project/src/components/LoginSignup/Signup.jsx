import React, {useState} from "react";
import './LoginSignup.css';
import person_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";


export default function Signup(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Signup email: ", email, "Password: ", password, "User Name: ", userName);
    }

    return(
        <div className="container">
            <div className="header">
                <h2>Sign up</h2>
            </div>
            <div className="form">
                <form onSubmit={handleSignup}>
                    <div>
                        <img src={person_icon} alt="user icon" />
                        <input
                        type="text"
                        placeholder="User Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required/> 
                    </div> 
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
                <button type="submit">Sign Up</button>
            </div>
        </div>
        
    )

}