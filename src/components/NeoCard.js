import React from "react";


export default function NeoCard(props) {

    return (
        
    <div>      
        <h1>{props.state}</h1>
        <img src={props.nasa_jpl_url} alt="space"/>
        <img src={props.self} alt="space"/>
        <h1>{props.id} </h1>
        
        <h1>{props.State}</h1>
        <h1>{props.name} </h1>      
    </div>
        
    )
} 