const ticketModel = require('../model/ticket')

exports.getTicket = (req, res) => {
    ticketModel.getTicket()
        .then((result) => {
            res.json({
                ticket: result
            })
        }).catch((err) => {
            console.log(err);
        })
}
exports.getTicketById = (req, res) => {
    const id = req.params.id
    ticketModel.getTicketById(id)
        .then((result) => {
            res.json({
                ticket: result
            })
        }).catch((err) => {
            console.log(err);
        })
}

exports.insertTicket = (req, res) => {
    const { order_Id, user_Id, movie_Id, location_Id, seat } = req.body
    const tick = {
        order_Id, 
        user_Id, 
        movie_Id, 
        location_Id, 
        time_stamp : new Date(), 
        seat
    }
    ticketModel.insertTicket(tick)
        .then((result) => {
            res.json({
                ticket: result
            })
        }).catch((err) => {
            console.log(err);
        })
}
exports.updateTicket = (req, res) => {
    const id = req.params.id
    const { order_Id, user_Id, movie_Id, location_Id, seat } = req.body
    const ticket = {
        order_Id, 
        user_Id, 
        movie_Id, 
        location_Id, 
        time_stamp : new Date(), 
        seat
    }
    ticketModel.updateTicket(id, ticket)
        .then((result) => {
            res.json({
                ticket: result
            })
        }).catch((err) => {
            console.log(err);
        })
}
exports.deleteTicket = (req, res) => {
    const id = req.params.id
    ticketModel.deleteTicket(id)
        .then((result) => {
            res.json({
                ticket: result
            })
        }).catch((err) => {
            console.log(err);
        })
}