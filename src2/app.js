const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")
const path = require('path')
// Tables
const users = require('./database/Users')
const session = require('express-session')
const products = require("./database/products")

// npm install express body-parser express-handlebars express-session
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 dias 
}));

app.use(express.static(path.join(__dirname, "assets")));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.engine('hbs', handlebars.engine({
    defaultLayout: 'main',//arquivo principal em html
    // Habilitar dados para renderizar o each
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')
app.use('/', router);
// verificar se esta logado em todos urls, menos em sessionAllowPath[]
const router = express.Router();
const sessionAllowPath = ["", "/", "/login"]
app.use('/*', (req, res, next) => {
    if (sessionAllowPath.indexOf(req.baseUrl) === -1 && !req.session.isLoggedIn) return res.redirect("/#errorSession");
    next()
});

app.get('/', (req, res) => {
    res.render("login")
})

app.post('/signUser', (req, res) => {
    const { email, password } = req.body
    users.findOne({ where: { email: email, password: password } })
        .then((result) => {
            if (result && result.user) {
                req.session.user = result.user
                req.session.isLoggedIn = true;
                req.session.save()
                res.redirect('/home')
            } else {
                res.render('login', { msg: 'Email/Senha incorretos' })
            }
        })
})
app.get('/logout', (req, res) => {
    req.session.isLoggedIn = false;
    req.session.save()
    res.redirect('/')
})
app.get('/home', (req, res) => {

    const bds = null
    products.findAll().then((post) => {
        bds = post
    });
    res.render('home', {post: bds});
})
app.post('/createuserForm',(req,res)=>{
    const { firstName, lastName, email, password, cpf, nascimento, confirmPassword } = req.body
    let isPassword  = true
    let result = new resCreateUser(firstName,lastName,email,password,cpf,nascimento,confirmPassword)
    if (!hasNumber(password)) {
      result.number = '• Não contem número!';
      isPassword = false
    }
    if (!hasLowerCase(password)) {
      result.LowerCase = '• Não contem letra minuscula!'
      isPassword = false
    }
    if (!hasUpperCase(password)) {
      result.UpperCase = '• Não contem letra maíscula!'
      isPassword = false
    }
    if (!hasEightChar(password)) {
      result.EightChar = '• Não contem 8 caractéres!'
      isPassword = false
    }
    if (!veriftPassword(password, confirmPassword)) {
      result.verify = '• Senha não são identicas!'
      isPassword = false
    }
    if (isPassword) {
      const user = new monthyUser(firstName, lastName, email, password, cpf, nascimento)
      console.log(user);
      users.create(user)
      return res.render("signup",{msg: 'Cadastrado com sucesso'})
    } else {
      return res.render('signup', { result: result })
    }
})


app.get('/searchProduct', (req, res) => {

    families.findAll().then((post) => {
        res.render('searchFamily', { post: post })
    })
})
app.post('/searchProduct', (req, res) => {

    const { Op, where } = require('sequelize');              // biblioteca de operadores
    const query = `${req.body.search}%`;// string de consulta
    products.findAll({ where: { name: { [Op.like]: query } } })
        .then((post) => {
            res.render('home', { post: post })
        }).catch((error) => {
            res.render('home', { post: error })
        })
})


app.post('/signFamily', upload.single('imagem'), (req, res) => {

    const imagem = req.file.originalname
    families.create({
        nomeResponsavel: req.body.nomeResponsavel,
        cpfResponsavel: req.body.cpfResponsavel,
        quantidadeFamilia: req.body.quantidadeFamilia,
        cep: req.body.cep,
        logradouro: req.body.logradouro,
        bairro: req.body.bairro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        fileimg: imagem
    }).then(() => {
        res.render('sucessfull', { msg: 'Cadastrado com sucesso' })
    }).catch((erro) => {
        res.render('error', { msg: erro, rota: 'family' })
    })
})
app.get("/familia/:id", (req, res) => {  //testar a parte de edição

    families.findOne({ where: { id: req.params.id } })
        .then((post) => {
            res.render('editFamily', { post: post })
        }).catch(() => {
            res.redirect('/home')
        })
});
app.post('/familia', (req, res) => {

    families.findOne({ where: { id: req.body.id } }).then((post) => {
        post.nomeResponsavel = req.body.nomeResponsavel
        post.cpfResponsavel = req.body.cpfResponsavel
        post.quantidadeFamilia = req.body.quantidadeFamilia
        post.cep = req.body.cep
        post.logradouro = req.body.logradouro
        post.bairro = req.body.bairro
        post.numero = req.body.numero
        post.complemento = req.body.complemento
        post.save().then(() => { res.render('sucessfull', { msg: 'Atualizado com sucesso' }) })
    }).catch((error) => { res.render('error', { msg: error, rota: ('condutor/' + req.body.id) }) })
})
app.get("/delete_familia/:id", (req, res) => {

    families.destroy({ where: { 'id': req.params.id } })
        .then(() => {
            res.render('sucessfull', { msg: 'Condutor excluido com sucesso' })
        })
        .catch((erro) => {
            res.render('error', { msg: erro, rota: 'searchDrivers' })
        })
})

app.post('/signUsers', (req, res) => {
    if (req.body.password == req.body.password1) {
        users.create({
            user: req.body.user,
            password: req.body.password
        }).then(() => {
            res.render('sucessfull', { msg: 'Cadastrado com sucesso' })
        }).catch((erro) => {
            res.render('error', { msg: erro, rota: 'drivers' })
        })
    } else {
        res.render('error', { msg: 'Senhas diferentes', rota: 'config' })
    }
})





require('dotenv').config()
const host = process.env.HOST || 3000
app.listen(process.env.PORT, () => {
    console.log(`Conectado!\nURL: http://localhost:${host}`)
})