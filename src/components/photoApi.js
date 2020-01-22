import React, {useState, useEffect} from "react";
import PhotoCard from "./photoCard";
import axios from "axios";

export default function PhotoTable() {
 const [photo, setPhoto] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=aFaaBLbefDiYkzHOHsWpvo4ZruhPKe4f3G2nliqQ")
            .then(response => {
            console.log(response.data);
            setPhoto(response.data)
            })
            .catch(error => {
                
            })
    }, []);
    
  return (
    <div>
      <PhotoCard 
      key={photo.index} 
      hdurl={photo.hdurl} 
      explanation={photo.explanation} 
      date={photo.date} title={photo.title}/>
    </div>
  );
}

