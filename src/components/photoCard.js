import React from "react";
import styled from "styled-components";

const PhotoImg = styled.img`
  width: 600px;
  height: 600px;
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
    border: 2px solid black;
    background: black;
    color: white;
`;

const CardDiv = styled.div` 
align-items: center;
margin: 5%;
`;

const H2 = styled.h2`
color:white;
`;
const H3 = styled.h2`
color:white;
`;

export default function PhotoCard(props) {


    
    return (
        
        <CardDiv>
            <H2>{props.title}</H2>
            <H3>{props.date}</H3>
            <PhotoImg src={props.hdurl} alt="space"/>
            <Explanation>{props.explanation}</Explanation>
        </CardDiv>
        
    )
} 