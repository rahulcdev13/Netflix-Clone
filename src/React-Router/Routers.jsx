// import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./Routerss.css";  
import NotFound from "./NotFound";
import Navbars from "./Navbars"; 
import Netflix from "../Netflix_App/Netflix";   
const Routers = () => {
    return (
        <>
            <Navbars />
            <div className="app">
                <Routes>   
                        <Route path="/" element={<Netflix />} /> 
                        <Route path="*" element={<NotFound />} />  
                </Routes>
            </div>
        </>
    )
}
export default Routers;