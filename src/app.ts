import express from 'express'
import { router } from './router'
import bodyParser from 'body-parser';
import path from 'path';
import { engine } from 'express-handlebars';

export class App {
    private server: express.Application = express();

    constructor() {
        this.server;
        this.layout();
        this.static();
        this.urlencoded();
        this.middleware();
        this.router();

    }
    private layout() {
        this.server.engine('hbs', engine({
            defaultLayout: 'main',//arquivo principal em html
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true
            }
        }))
        this.server.set('view engine', 'hbs')
        this.server.set('views', __dirname + '/views')
    }
    private static() {
        this.server.use(express.static(path.join(__dirname, "assets")))
    }
    private middleware() {
        this.server.use(bodyParser.json());
    }
    private urlencoded() {
        this.server.use(bodyParser.urlencoded({ extended: false }));
    }
    private router() {
        this.server.use(router);
    }
    public getServer(): express.Application {
        
        return this.server
    }
}