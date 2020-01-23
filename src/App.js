import React from "react";
import "./App.css";

import PhotoApi from "./components/photoApi";
import NeoApi from "./components/NeoApi";

import styled from "styled-components";

const CardApp = styled.div` 
text-align: center;

    

`;


export default function App() {
  return (
    <CardApp>
      
      <PhotoApi />
      {/* <NeoApi /> */}
      
    </CardApp>
  );
}


