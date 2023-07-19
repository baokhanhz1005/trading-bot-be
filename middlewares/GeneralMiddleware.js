
const GeneralMiddleware = (request, response, next) =>{
    console.log(`Request General URL is: ${request.url}`)
    next()
}

module.exports = {
    GeneralMiddleware
}