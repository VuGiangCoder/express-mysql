

let getHomePage = (req ,res) => {
    res.send('Hello world')
}
let sendMessage = (req, res) => {
    res.send('Home oke')
}
module.exports = {
    getHomePage,
    sendMessage,
}