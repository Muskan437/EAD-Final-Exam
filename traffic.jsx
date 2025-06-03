const [useState, useEffect] = React;
import React from "react";
import "./traffic.css";
const Traffic = () => { 
    const [currentLight, setCurrentLight] =    useState("red");
       useEffect(() => {
        const interval =   setInterval(() => {
            setCurrentLight((previousLight) => {

                if  (previousLight === "red")   return "green";
                if ( previousLight === "yellow") return    "red";
                if (previousLight ===   "green") return "yellow";
                return "red";
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []); 
    return (
        <div className="traffic-container">

            <div className  =  {`light red    ${ currentLight === "red" ?    "active" : ""}`} ></div>
            <div className = {`light yellow   ${currentLight === "yellow"   ? "active" : ""}`}> </div>
            <div   className      = {`light green    ${currentLight === "green" ?   "active" : ""}`}></div>
        </div>
    );

};
export default Traffic;
