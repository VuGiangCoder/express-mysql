const db = require('../models/index')

let getHomePage = async (req ,res) => {
    try {
        let data = await db.User.findAll();
        res.send(data)
    } catch (error) {
        console.log(error)
    }
    
}
let sendMessage = (req, res) => {
    res.send('Home oke')
}
module.exports = {
    getHomePage,
    sendMessage,
}
