import { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import styles from "../css/Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";

import apiContextProvider from "./Context.js";

export default function Login() {
    const valueFromContext = useContext(apiContextProvider);
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        appType: "ott"
    })
    const handleLogin = () => {
        // navigate("/");
        async function check() {
            let res = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
                method: "POST",
                headers: {
                    'accept': "application/json",
                    'projectID': valueFromContext.projectId,
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(credentials)
            })
            let data = await res.json()
            if (data.status == "success") {
                setError("");
                valueFromContext.username = data.data.user.name;
                valueFromContext.email = credentials.email;
                valueFromContext.password = credentials.password;
                valueFromContext.jwt = data.token;
                navigate("/");
            }
            else {
                setError(() => {
                    return data.message;
                })
            }
        }
        check();
    }

    return (
        <div className={styles.block}>
            <h2 className={styles.h2}>Sign In</h2>
            <form>

                <input className={styles.input} value={credentials.email} onChange={(e) => {
                    setCredentials((prev) => {
                        return { ...prev, email: e.target.value };
                    })
                }} type='email' placeholder='Email' />
                <div style={{
                    display: "flex",
                }}>

                    <input className={styles.input} value={credentials.password} onChange={(e) => {
                        setCredentials((prev) => {
                            return { ...prev, password: e.target.value };
                        })
                    }} type="password" placeholder='Password' />

                </div>
            </form>
            <p className={styles.p} style={{
                color: "red",
                fontSize: "2vh"
            }}>{error}</p>
            <button className={styles.button} onClick={handleLogin}>Sign In</button>
            <p className={styles.p} >New to Hotstar? <span className={styles.span} onClick={() => {
                return navigate("/signup")
            }}>Sign Up here.</span></p>

        </div>


        // </div>
    )
}