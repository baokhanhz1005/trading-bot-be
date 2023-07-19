const Accounts = require("../Account/models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleLogin = async (request, response) => {
  const listAccount = await Accounts.find({});

  const { email, password } = request.body;
  const user = listAccount.find((account) => account.user === email);

  if (user && user.password === password) {
    const payload = {
      email,
      password,
    };
    const secretKey = process.env.SECRET_KEY;
    const options = { expiresIn: "1h" };
    const token = jwt.sign(payload, secretKey, options);

    let userInfo = user;
    delete userInfo.password;

    response.status(200).json({
      code: 200,
      token,
      userInfo,
      status: "Login success",
    });
  } else {
    response.status(404).json({
      code: 404,
      status: "Login failed",
      message: "User or password incorrect",
    });
  }
};

module.exports = {
  handleLogin,
};
