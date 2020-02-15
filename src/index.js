import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import mongoose from "mongoose";

// Configure connection to MongoDB
mongoose.connect("mongodb://localhost:27017/keeper-app", 
{ useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connections error:"));
db.once("open", () => console.log("Succesfully connected to the database"));

// Create schemas and models
// const pageSchema

// const noteSchema = {

// }


ReactDOM.render(<App />, document.getElementById("root"));