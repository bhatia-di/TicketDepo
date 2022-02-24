import React from "react";
import "../../styles/index.css";
import { faClipboardList, faClipboardCheck, faChevronCircleLeft, faChevronCircleRight, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";


export default function Home() {
    return(
           <header>
                <section class='hero-header'>
                <h1>Ticket-Depo</h1>
                <h2>To manage all your ticketing needs</h2>
                <Button className="color-back-aqua">Sign-up</Button>
                </section>
            </header>


           
        
    );



}
