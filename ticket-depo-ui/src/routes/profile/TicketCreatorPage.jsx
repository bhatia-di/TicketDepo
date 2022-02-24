import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactLoading from 'react-loading';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { WithContext as ReactTags } from 'react-tag-input';
import "../../styles/index.css";
import * as APIURLS from "../../constants/APIConstants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TicketCreatorPage() {
    const KeyCodes = { comma: 188, enter: 13};
      
    const delimiters = [KeyCodes.comma, KeyCodes.enter];
    const [tags, setTags] = React.useState([
        { id: 'support', text: 'support' }
      ]);
      const [collaboratorsEmail, setCollaboratorsEmail] = React.useState(null);
      const [description, setDescription] = React.useState();
      const [subject, setSubject] = React.useState();
      const [due_at, setDueAt] = React.useState();
      const [priority, setPriority] = React.useState();
      const [status, setStatus] = React.useState();
      const [type, setType] = React.useState();
      const notifySuccess = () => toast.success("Your ticket was successfully created!");
      const notifyError = (errormessage) => toast.error(errormessage);

      const createTicket = () => {
          const params = 
            {
               "assignee_email": "dik@gmail.com",
                "collaborators_email": [collaboratorsEmail],
                "subject": subject,
                "description": description,
                "due_at": due_at,
                "priority": priority,
                "status": status,
                "tags": tags.map(tag => tag.text),
                "type": type
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(params)
            };
            fetch(APIURLS.createTicketURL, requestOptions)
            .then(response => {
                if (response.status == 201) {
                    notifySuccess();
                    setCollaboratorsEmail(null);
                    setDescription("");
                    setDueAt(null);
                    setPriority(null);
                    setTags([]);
                    setType(null);
                    setSubject("");   
                    return response.json();
                } else {

                    new Error();
                } })
                  .catch((error) => {
                      notifyError("Creation failed!" + error.message);

                      console.error("Fetch API Call failed with an error" + error);
                      });



          
      }
      

      const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
      };
    
      const handleAddition = tag => {
        setTags([...tags, tag]);
      };
    
      const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags(newTags);
      };  
    
    return(
        <div className={"container-fluid"}>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />

           <div className={"card-layout"}>
             <h3 className={"color-aqua"}>
             <FontAwesomeIcon icon={faClipboardList} color="#1f939c" className={"mr-4"} />
             <span className={"ml-2"}>  Like a feature or want to report an issue? 
             Tell us your what you feel by creating a ticket. </span>
             </h3>
            </div>


            <Form>
                <FormGroup>
                 <div className="row mt-2">
                    <div className="col-1">
                        <Label for="collaborators" disabled> Collaborators</Label>    
                    </div>

                    <div className="col-5">
                        <Input id="collaboratorsEmail" name="collaboratorsEmail" 
                            onChange={(event) => {setCollaboratorsEmail(event.target.value)}}
                            placeholder="Add collaborators" type="email" />


                    </div>
                 </div> 


                 <div className="row mt-2">
                    <div className="col-1">
                        <Label for="subject" disabled> Subject</Label>    
                    </div>

                    <div className="col-5">
                        <Input id="subject" name="subject" 
                            onChange={(event) => {setSubject(event.target.value)}}
                            placeholder="Add subject" type="text" />


                    </div>
                 </div>   

                <div className="row mt-2">
                    <div className="col-1">
                        <Label for="description" disabled> Description</Label>    
                    </div>

                    <div className="col-5">
                        <Input id="description" name="description" 
                            onChange={(event) => {setDescription(event.target.value)}}
                            placeholder="Add description of the task" type="textarea" />


                    </div>
                 </div>   
               
                 <div className="row mt-2">
                    <div className="col-1">
                        <Label for="due_at" disabled> Due At</Label>    
                    </div>

                    <div className="col-5">
                        <Input id="due_at" name="due_at" 
                            onChange={(event) => {setDueAt(event.target.value)}}
                            type="date" />


                    </div>
                 </div>   


                 <div className="row mt-2">
                    <div className="col-1">
                        <Label for="priority" disabled> Priority </Label>    
                    </div>

                    <div className="col-5">
                        <Input id="priority" name="priority" 
                            onChange={(event) => {setPriority(event.target.value)}}
                            type="select">
                                <option disabled defaultValue={true}> select valid priority</option>
                                <option> urgent </option>
                                <option> high </option>
                                <option> normal </option>
                                <option> low </option>
                                
                        </Input>        


                    </div>
                 </div>   

                 <div className="row mt-2">
                    <div className="col-1">
                        <Label for="status" disabled> Status </Label>    
                    </div>

                    <div className="col-5">
                        <Input id="status" name="status" 
                            onChange={(event) => {setStatus(event.target.value)}}
                            type="select">
                                <option disabled defaultValue={true}> select status</option>
                                <option> new </option>
                                <option> open </option>
                                <option> hold </option>
                                <option> solved </option>
                                <option> closed </option>
                                
                        </Input>        


                    </div>
                 </div>   


                 <div className="row mt-2">
                    <div className="col-1">
                        <Label for="type" disabled> Type </Label>    
                    </div>

                    <div className="col-5">
                        <Input id="type" name="type" 
                            onChange={(event) => {setType(event.target.value)}}
                            type="select">
                                <option disabled defaultValue={true}> select type</option>
                                <option> problem </option>
                                <option> incident </option>
                                <option> question </option>
                                <option> task </option>
                                
                        </Input>        


                    </div>
                 </div>   
                 

                <div className="row mt-2">
                    <div className="col-1">
                        <Label>Tags</Label>
                    </div>

                    <div className="col-11">
                    <ReactTags
                            tags={tags}
                            classNames={{
                                tags: 'badge-primary',

                            }}
                            //suggestions={suggestions}
                            delimiters={delimiters}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            handleDrag={handleDrag}
                            //handleTagClick={handleTagClick}
                            inputFieldPosition="inline"
                            autocomplete
                            placeholder="add tags"
                    />
                    </div>
                </div>


                </FormGroup>
            </Form>

             <div className="row mt-2">
                    <div className="col-1">
                    <Button className="color-back-aqua" onClick={createTicket}> Create </Button>
                    </div>
            </div>   
                
                
        </div>
    );




}