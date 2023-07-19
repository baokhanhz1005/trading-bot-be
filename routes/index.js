
module.exports = app => {
    require('./General')(app);
    require('./Trading')(app);
    require('./Login')(app);
}