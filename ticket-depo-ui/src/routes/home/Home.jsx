import React from "react";
import "../../styles/index.css";
import { faClipboardList, faClipboardCheck, faChevronCircleLeft, faChevronCircleRight, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Home() {
    return(
        <div className="container-fluid">
            <div className={"card-layout"}>
            <h3 className={"color-aqua"}>
            <FontAwesomeIcon icon={faClipboardList} color="#1f939c" className={"mr-4"} />
             <span className={"ml-2 p-1"}>  
                   We are a ticket management company satisfying all you ticket needs
             </span>
            </h3>
     </div>
        </div>
        
    );



}
