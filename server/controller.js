module.exports = {
    getAllProps: (req, res) => {
        req.app.get('db').get_all_properties().then(properties => {
            res.status(200).send(properties)
        })
    },
    createProperty: (req, res) => {
        const { propertyName, address, city, states, zipcode, imageUrl, monMortAmount, desMonRent } = req.body
        req.app.get('db').create_property([propertyName, address, city, states, zipcode, imageUrl, monMortAmount, desMonRent])
        .then(ok => {
            res.sendStatus(200)
        })
    },
    deleteProperty: (req, res) => {
        const {id} = req.params
        req.app.get('db').delete_property([id])
            .then(ok => res.sendStatus(200))
    }
}