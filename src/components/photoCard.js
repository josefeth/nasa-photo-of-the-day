import React from "react";
import styled from "styled-components";

const PhotoImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale;
  flex-shrink: 2;
  display: block;
    margin-left: auto;
    margin-right: auto;
`;

const Explanation = styled.p`
    display:flex;
    justify-content:center;
    text-align: center;
  
    


`;

const CardDiv = styled.div`    

align-items: center;
margin: 5%;


`;
export default function PhotoCard(props) {


    
    return (
        
        <CardDiv>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <PhotoImg src={props.hdurl} alt="space"/>
            <Explanation>{props.explanation}</Explanation>
        </CardDiv>
        
    )
} 