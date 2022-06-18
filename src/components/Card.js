import React from "react";
import star from "../images/Star.png";

export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} />
            <div className="firstline">
                <img src={star} />
                <span>{props.rating}</span>
                <span className="gray">({props.people})</span>
                <span className="gray"> . USA</span>
            </div>
            <div className="secondline">
                {props.phrase}
            </div>
            <div className="thirdline">
                <span className="bold"> From ${props.money}</span>
                <span> / person</span>
            </div>
        </div>
    )
}