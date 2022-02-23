const express = require('express');
const router = express.Router();
const TicketController = require('../controller/ticketController');

router.post("/", TicketController.createTicket);
router.get("/", TicketController.getAllTickets);
router.put("/detailTicket", TicketController.getDetailedTicket);

module.exports = router;
