const express = require("express");
const router = require("./router")
const body_parser = require("body-parser");
const path = require("path");
const handlebars = require("express-handlebars");
const session = require("express-session")
const { cleanBag } =require('./utils/CarBuyFunctions')
class App {
    server = express();

    constructor() {
        this.server;
        this.session();
        this.layout();
        this.static();
        this.urlencoded();
        this.middleware();
        this.checkSession();
        this.router();
    }
    layout() {
        this.server.engine('hbs', handlebars.engine({
            defaultLayout: 'main', //arquivo principal em html
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true
            }
        }));
        this.server.set('view engine', 'hbs');
        this.server.set('views', __dirname + '/views');
    }
    static() {
        this.server.use(express.static(path.join(__dirname, "assets")));
    }
    middleware() {
        this.server.use(body_parser.json());
    }
    urlencoded() {
        this.server.use(body_parser.urlencoded({ extended: false }));
    }
    router() {
        this.server.use(router);
    }
    session() {
        this.server.use(session({
            secret: 'secret-key',
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 1 * 10 * 60 * 1000 } // 10 Minutos
        }));
    }
    checkSession() {
        const sessionAllowPath = ["", "/", "/login","/create","/signUser", "/createUserForm"]
        this.server.use('/*', (req, res, next) => {
            if (sessionAllowPath.indexOf(req.baseUrl) === -1 && !req.session.isLoggedIn) {
                cleanBag()
                return res.render('sucessfull',{msg: 'Sessão expirada', sessionCod: true});
            }
            next()
        })
    }
    getServer() {
        return this.server;
    }
}
module.exports = App;
