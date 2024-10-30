import { App } from "./app"
import dotenv from "dotenv"

dotenv.config()
const host = process.env.HOST || 3000
new App().getServer().listen(host, () => {
    console.log(`http://localhost:${host}`);
})