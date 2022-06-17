import React from "react";  
import Routers from "./React-Router/Routers";
import { BrowserRouter } from "react-router-dom";  

const App = () => (
    <>
        <BrowserRouter>
            <Routers />
        </BrowserRouter> 
    </>
);
export default App;
