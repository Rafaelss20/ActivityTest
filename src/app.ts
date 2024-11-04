import express, { Request, Response, NextFunction} from 'express'
import { router } from './router'
import bodyParser from 'body-parser';
import path from 'path';
import { engine } from 'express-handlebars';
import session from "express-session";
export class App {
    private server: express.Application = express();

    constructor() {
        this.server;
        this.layout();
        this.static();
        this.urlencoded();
        this.middleware();
        this.router();
        // this.session();
        // this.checkloggid();
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
    // private session() {
    //     this.server.use(session({
    //         secret: 'secret-key',
    //         resave: false,
    //         saveUninitialized: false,
    //         cookie: { maxAge: 1 * 60 * 1000 } // 10 min 
    //     }));
    // }
    // session.isLoggedIn: boolean
    // private checkloggid() {
    //     const sessionAllowPath = ["", "/", "/login","/create"]
    //     this.server.use('/*', (req: Request, res: Response, next: NextFunction) => {
    //         if (sessionAllowPath.indexOf(req.baseUrl) === -1 && !req.session.isLoggedIn) return res.redirect("/#errorSession");
    //         next()
    //     });
    // }
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