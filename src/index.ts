import { App } from "./app"

new App().getServer().listen(8082, () => {
    console.log('http://localhost:8082');
})