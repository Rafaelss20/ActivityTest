const App = require("./app");
require('dotenv').config()
const app = new App
const host = process.env.HOST || 3000;
app.getServer().listen(host, () => {
    console.log(`http://localhost:${host}`);
});
