const uuidv4 = require('uuidv4');
const bcrypt = require('bcrypt');
const Ticket = require('../models').ticket; // loads index.js
const authorization = require('../authorization/authorize');
const { response } = require('express');
const { use } = require('bcrypt/promises');

exports.createTicket = async (req, res) => {

    console.log("Create Ticket Controller Started");
    console.log("Request Info", req.body);
    const {assignee_email, collaborators_email,
        description,due_at, priority, status, subject, tags, type} = req.body;
    if(assignee_email && collaborators_email && description && due_at && subject) {       

        console.log("Found all necessary fields");
        console.log(tags);
        console.log(tags instanceof Array);

             const ticket = {

                    id: uuidv4.uuid(),
                    assignee_email: assignee_email,
                    collaborators_email: collaborators_email,
                    description: description,
                    due_at: due_at,
                    priority: priority,
                    status: status,
                    tags: tags,
                    type: type,
                    subject: subject
                };

                Ticket.create(ticket)
                    .then(data => {

                        let temp = data.toJSON();
                        res.status(201).send(temp);
                        console.log("Ticket has been created.")

                    })
                    .catch(err => {

                        console.error(err.message);
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the User."
                        });
                    });          
        
    } else {

        res.status(400).send({
            message: "Some required fields were not passed as a part of the request."
        });
    }

};
