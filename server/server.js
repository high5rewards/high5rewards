/** Node server */

//init node express app
const path = require("path");
const express = require("express");
let PORT = process.env.PORT;
if (PORT === null || PORT === undefined || PORT === "") {
  PORT = 3000;
}
const app = express();

//
//
//Node serve files for built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.static("../client/public"));

app.get("/", (req, res) => {
  res.sendFile(path + "index.html");
});
//
//



// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

//listen at specified port
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}...`);
});
