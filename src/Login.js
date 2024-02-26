import React, {useState} from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import {auth} from "./firebase";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate("/");
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            if(auth) {
                navigate("/");
            } 
        })
        .catch((error) => {
            alert(error.message);
        })
    }
    return (
        <div className="login">
            <div className="login__logo">
                <StorefrontIcon className="login__logoImage" fontSize="large" />
                <h2 className="login__logoTitle">eShop</h2>
            </div>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className="login__registerButton" onClick={register}>Create your eShop Account</button>
            </div>
        </div>
    );
}
export default Login;
