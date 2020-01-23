import React from "react";
import "./App.css";
import logo from './nasapic.jpg';
import PhotoApi from "./components/photoApi";
import NeoApi from "./components/NeoApi";

import styled from "styled-components";

const CardApp = styled.div` 
text-align: center;
background: #0E0E0E;
// background: #E0EAFC;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Logo = styled.img`
width: 500px;
height: 300px;
`;


export default function App() {
  return (
    <CardApp>
      <Logo src={logo}/>
      <PhotoApi />
      {/* <NeoApi /> */}
      
    </CardApp>
  );
}


