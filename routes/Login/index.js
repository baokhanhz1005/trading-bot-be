const { routerInfo } = require("../../constants")
const { GeneralMiddleware } = require("../../middlewares/GeneralMiddleware")
const { handleLogin } = require("../../modules/Login")

module.exports = app => {
    app.get(routerInfo.login, GeneralMiddleware, handleLogin)
}