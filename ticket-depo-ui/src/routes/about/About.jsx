import React from "react";
import * as APIURLS from "../../constants/APIConstants";

export default function About() {

    React.useEffect(() => {
        console.log("Fetching Back end health");
      
        fetchHealthInfo();
      
      
        }, []);

    const fetchHealthInfo = () => {
            fetch(APIURLS.getHealthURL)
            .then(response => {if (response.status == 200) {return response.json()} else {new Error()} })
                          .then(result => {
        
                              console.log("Success");
                              }).catch((error) => {
                            setErrorMessage("Fetch API Call failed with an error");
        
                              console.error("Fetch API Call failed with an error" + error);
                              });
        
          };    
    return(
    <h1>You are in About Section</h1>
    );



}
