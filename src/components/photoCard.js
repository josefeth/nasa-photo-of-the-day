import React from "react";


export default function PhotoCard(props) {

    return (
        <div>
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <img src={props.hdurl} alt="space"/>
        <p>{props.explanation}</p>
        </div>
    )
} 