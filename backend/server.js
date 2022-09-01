const express = require("express"); // bring in the module from package.json
const dotenv = require("dotenv");
const app = express(); //object
dotenv.config();
app.get("/", (req,res) => {
    res.send("API is running...");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));


