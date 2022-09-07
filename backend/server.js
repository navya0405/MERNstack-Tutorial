const express = require("express"); // bring in the module from package.json
const notes = require("./data/notes");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express(); //object

dotenv.config();
connectDB();
app.use(express.json());
// app.get("/", (req,res) => {
//     res.send("API is running...");
// });
// app.get('/api/notes',(req,res) =>{
// res.json(notes)}
// );
app.use("/api/users",userRoutes);
app.use(notFound);
app.use(errorHandler);

// app.get('/api/notes/:id',(req,res)=>{
//     const note =notes.find((n)=>n._id===req.params.id);
//     res.send(note)
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));


