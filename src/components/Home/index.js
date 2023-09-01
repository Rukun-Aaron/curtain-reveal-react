import CurtainButton from "../CurtainReveal";
import { useState } from "react";
const Home =(isNavOpen, toggleNav)=>{
    
    return (
        

   <>
    <p> Hello</p>
    <CurtainButton  isNavOpen={isNavOpen} toggleNav={toggleNav}></CurtainButton>

    </>
    )
};

export default Home;