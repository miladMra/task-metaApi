const weatherRouter = require("./weather/router")

module.exports = (app)=>{
    app.use('/api/v1/city',weatherRouter)
}