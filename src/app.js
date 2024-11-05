const express = require("express");
const router = require("./router")
const body_parser = require("body-parser");
const path = require("path");
const handlebars = require("express-handlebars");
// import { insertProducts } from './database/db';
class App {
    server = express();
    
    constructor() {
        this.server;
        this.layout();
        this.static();
        this.urlencoded();
        this.middleware();
        this.router();
    }
    layout() {
        this.server.engine('hbs',  handlebars.engine({
            defaultLayout: 'main', //arquivo principal em html
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true
            }
        }));
        this.server.set('view engine', 'hbs');
        this.server.set('views', __dirname + '/views');
    }
    // private produtosInsert(){
    //     const produtos = getproducts()
    //     insertProducts(produtos)
    // }
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
    getServer() {
        return this.server;
    }
}
module.exports = App;
