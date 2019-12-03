exports.get404 = (req, res) => {
    res.status(404).json({
        message: 'Error: Page Not Found.'
    })
};
