const { check } = require("express-validator");
exports.signupValidation = [
  check("name", "Name is requied").not().isEmpty(),
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];
exports.loginValidation = [
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];

// The code exposes two arrays that specify the criteria for validating user registration and login forms. The "name," "email," and "password" fields must comply with a number of requirements, such as not being empty, using a valid email format, and having a minimum of six characters in length. In an Express.js application, these arrays can be used to verify user input during the registration and login phases.





