const getHomepage = (req, res) => {
    res.send('Giới thiệu bản thân tôi')
}

const getInfo = (req, res) => {
    res.send('Giới thiệu bản thân tôi')
}

const getAbout = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getInfo, getAbout

}