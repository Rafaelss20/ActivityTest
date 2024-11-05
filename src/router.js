
const express = require("express");
// const carBuy = require("./database/model/carBuy");
const signupRouter = require("./routers/signupRouter");
const home = require("./routers/home");

const router = express.Router();
// const createUserService = new CreateUserService
const createUser = new signupRouter;
const produtos = new home;
//Routes
router.get("/", (req, res) => {
    res.render('login')
});
router.get("/create", (req, res) => {
    res.render('signup')
});

router.get("/home", (req, res) => {
    produtos.findAll(req, res);
});
router.post('/searchProduct',(req,res)=>{
    produtos.find(req,res)
})
router.post('/createUserForm', (req, res) => {
    createUser.save(req, res);
});
module.exports = router;
