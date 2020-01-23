import React, {useState, useEffect} from "react";

import axios from "axios";
import NeoCard from "./NeoCard";

export default function PhotoNeo() {
 const [neo, setNeo] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2000-01-01&end_date=2000-01-07&api_key=aFaaBLbefDiYkzHOHsWpvo4ZruhPKe4f3G2nliqQ")
            .then(response => {
            console.log(response.data);
            setNeo(response.data)
            })
            .catch(error => {
                
            })
    }, []);
    
  return (
    <div>
      <NeoCard 
      key={neo.index} 
      nasaurl={neo.nasa_jpl_url}
      ref={neo.State}
      id={neo.id} 
      name={neo.name} />
    </div>
  );
}
