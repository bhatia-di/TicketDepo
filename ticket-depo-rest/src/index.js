const express = require("express");
const app = express();


app.use(express.json());

//Importing USER Routes
const userRoute = require('./routes/userRoute');
app.use('/api/v1/user', userRoute);

//Importing Ticket Routes
const ticketRoute = require('./routes/ticketRoute');
app.use('/api/v1/ticket', ticketRoute);



//Importing health Routes
const healthRoute = require('./routes/healthRoute');
app.use('/api/healthz', healthRoute);




app.listen('3000', () => {

    console.log("Server is listening on port 3000");

});
