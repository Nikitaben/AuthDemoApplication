const express = require("express");
const router = express.Router();

const users = [
    { id: 1, email: "aaa@aaa.com", password: "1234"},
    { id: 2, email: "bbb@bbb.com", password: "1111"},
    { id: 3, email: "ccc@ccc.com", password: "1223"},

];

router.get("/products", (req, res) => {

    const list = [
        {id: 1, name: "Tandoor Desi Pizza", price: 14.99 },
        {id: 1, name: "Masala Fries", price: 5.99 },

    ];
   //console.log("Hello from API"); 
   res.status(200).send(list);
});
router.get("/premium", (req, res) => {

    const list = [
        {id: 1, name: "Tandoor Desi Pizza premium", price: 34.99 },
        {id: 1, name: "Masala Fries premium", price: 25.99 },

    ];
   //console.log("Hello from API"); 
   res.status(200).send(list);
});


router.get('/:id', (req, res) => {
    const user = users.find((u) => u.id == +req.params.id)
    res.send(user);
});
router.post("/register", (req, res) => {
    let userData = req.body;

    res.send(userData);
});
module.exports = router;
