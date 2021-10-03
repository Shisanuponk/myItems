exports.getPrivateRoute = (req, res, next) => {
    res.status(200).json({
        success: true,
        date: 'You got access to the private data in this route'
    })
}