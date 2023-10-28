// app.js

const express = require("express");
const session = require("express-session");
const store = new session.MemoryStore();
const app = express();
const port = 9000;

app.use(express.json());
// Configure session middleware
app.use(
  session({
    secret: "mysecretkey", // Change this to a strong, unique secret key
    saveUninitialized: false,
    store: store,
    cookie: { maxAge: 60000 * 60 },
  })
);
const routesNew = require("./routes/routesTemp");
app.get("/", (req, res) => {
  console.log("HERE");
  res.send("Hello World!");
});

app.use("/auth", routesNew);
// // Simple middleware to demonstrate session usage
// app.use((req, res, next) => {
//   if (req.session.views) {
//     req.session.views++;
//   } else {
//     req.session.views = 1;
//   }
//   res.send(`You have visited this page ${req.session.views} times.`);
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
