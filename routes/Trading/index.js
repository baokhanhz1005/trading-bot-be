
const { routerInfo } = require("../../constants")
const { GeneralMiddleware } = require("../../middlewares/GeneralMiddleware")

module.exports = app => {
    app.get(routerInfo.trading, GeneralMiddleware)
}