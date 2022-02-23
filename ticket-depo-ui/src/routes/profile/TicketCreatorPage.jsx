import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactLoading from 'react-loading';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { WithContext as ReactTags } from 'react-tag-input';
import "../../styles/index.css";

export default function TicketCreatorPage() {
    const KeyCodes = { comma: 188, enter: 13};
      
    const delimiters = [KeyCodes.comma, KeyCodes.enter];
    const [tags, setTags] = React.useState([
        { id: 'customerSupport', text: 'customerSupport' }
      ]);
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
                            onChange={(event) => {console.log(event.target.value)}}
                            placeholder="Add collaborators" type="email" />


                    </div>
                 </div> 


                 <div className="row mt-2">
                    <div className="col-1">
                        <Label for="subject" disabled> Subject</Label>    
                    </div>

                    <div className="col-5">
                        <Input id="subject" name="subject" 
                            onChange={(event) => {console.log(event.target.value)}}
                            placeholder="Add subject" type="text" />


                    </div>
                 </div>   

                <div className="row mt-2">
                    <div className="col-1">
                        <Label for="description" disabled> Description</Label>    
                    </div>

                    <div className="col-5">
                        <Input id="description" name="description" 
                            onChange={(event) => {console.log(event.target.value)}}
                            placeholder="Add description of the task" type="textarea" />


                    </div>
                 </div>   
               
                 <div className="row mt-2">
                    <div className="col-1">
                        <Label for="due_at" disabled> Due At</Label>    
                    </div>

                    <div className="col-5">
                        <Input id="due_at" name="due_at" 
                            onChange={(event) => {console.log(event.target.value)}}
                            type="date" />


                    </div>
                 </div>   


                 <div className="row mt-2">
                    <div className="col-1">
                        <Label for="priority" disabled> Priority </Label>    
                    </div>

                    <div className="col-5">
                        <Input id="priority" name="priority" 
                            onChange={(event) => {console.log(event.target.value)}}
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
                            onChange={(event) => {console.log(event.target.value)}}
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
                            onChange={(event) => {console.log(event.target.value)}}
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
                    <Button className="color-back-aqua"> Create </Button>
                    </div>
            </div>   
                
                
        </div>
    );




}