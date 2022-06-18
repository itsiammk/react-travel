import React from "react";

export default function Props(props){
    return (
        <div className="repeat">
            <h1>{props.name}</h1>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    )
}