import React from "react";
import grp from "../images/Group.png";

export default function Hero(){
    return(
        <div className="group">
            <img src={grp} alt="group-pic" />
            <h2>Online Experiences</h2>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}