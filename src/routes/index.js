const routes = require("express").Router()

routes.use("/users", require("./users"))
routes.use("/blogImages", require("./blogImages"))
routes.use("/product", require("./product"))

module.exports = routes
