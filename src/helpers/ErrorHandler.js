export default (error, req, res, next) => {
    console.error(error)
    res.status(500).send(`${error.msg || error.code || error}`)
}
