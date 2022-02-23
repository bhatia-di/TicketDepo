import React, { useState } from "react";
import ReactLoading from 'react-loading';
import * as APIURLS from "../../constants/APIConstants";
import * as Utils from "../../utils/Utils";
import TypeBadge from "../../components/TypeBadge";
import ReadMore from "../../components/ReadMore";
import Moment from 'react-moment';
import Accordion from 'react-bootstrap/Accordion';
import {Input} from 'reactstrap';
import "../../styles/index.css";


export default function DetailedTicketViewerBody(detailedTicketViewerBodyProps) {
    const [ticket, setTicket] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    React.useEffect(() => {
    
    if (Utils.isNonNull(detailedTicketViewerBodyProps.activeTicket)) {
        console.log("ACtive ")
        const activeTicketId = detailedTicketViewerBodyProps.activeTicket.split(":")[1];
        console.log("-----------Execute fetch--------------");
        fetchTicketWithId(activeTicketId);


    }



    }, [detailedTicketViewerBodyProps.ticketId, detailedTicketViewerBodyProps.activeTicket]);


    const fetchTicketWithId = (ticketId) => {

        setTicket(null);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ticketId: ticketId })
        };

        fetch(APIURLS.getTicketWithIdURL, requestOptions)
        .then(response => response.json())
                      .then(result => {
                          setTicket(result);
                          }).catch((error) => {
                          console.error("Fetch API Call failed with an error" + error);
                          });

      };





    if(ticket) {
        return (
       <div className={"container-fluid"}>

       <ReadMore text={"Description: \n" + ticket.description} />
       <br/>

       {
       Utils.isNonNull(ticket.status) && <span> <small>Status:</small> <TypeBadge type={ticket.status} /> <br/></span>
       }

       {
        Utils.isNonNull(ticket.type) && <span> <small>Type: </small> <TypeBadge type={ticket.type} /> <br/></span>
       }

       {
        Utils.isNonNull(ticket.priority) && <span> <small>Priority: </small> <TypeBadge type={ticket.priority} /> <br/></span>
       }
       {
        !Utils.isArrayEmpty(ticket.tags) && <span> <small>Tags:</small> {ticket.tags.map((tagValue,index) => <TypeBadge key={ticket.id + "_tag_" + index} typeBadge={"tag"} type={tagValue} />)}<br/></span>
       }
       {
        Utils.isNonNull(ticket.created_at) && <span><small>Created At: <Moment format={"D MMMM YYYY HH:MM"}>{ticket.created_at}</Moment>  </small><br /></span>
       }
       {
        Utils.isNonNull(ticket.updated_at) && <span><small>Updated At: <Moment format={"D MMMM YYYY HH:MM"}>{ticket.updated_at}</Moment> </small><br /></span>
       }



       </div>);

    }
   else {
      return(
          <div className={"container-fluid"}>
               <ReactLoading type={"spinningBubbles"} color={"#1f939c"} height={'10%'} width={'10%'} />
         </div>

         );

   }



}