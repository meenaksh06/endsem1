import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.js";
import styles from "../css/Homepage.module.css";
import { useContext } from "react";
import apiContextProvider from "./Context.js";


export default function Homepage(){
    const valueFromContext = useContext(apiContextProvider);
    return(
        <div className={styles.home}>
            <div className={styles.navbarContainer}>
                <Navbar/>
            </div>
            <div className={styles.bodyContainer}>
                <Outlet/>          
            </div>
        </div>
    )
}