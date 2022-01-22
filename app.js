const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
const router = express.Router();

app.set("view-engine", "ejs");
app.use(express.static("public"));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const user = require("./controllers/userController");
const course = require("./controllers/courseController");

// const { validateEmail } = require("./utils/validation");

// console.log(validateEmail("Test_test@hacktitude.io"));

app.use(
  session({
    secret: "secretvalue",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", router);
app.use("/user", user);
app.use("/course", course);

router.get("/", (req, res) => {
  res.redirect("/user/signin");
});

router.get("/guest", (req, res) => {
  res.render("guest-signin.ejs");
});

router.get("/guest/signin", (req, res) => {
  res.redirect("/course/allcourses");
});

module.exports = app;
