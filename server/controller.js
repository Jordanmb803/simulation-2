module.exports = {
    getAllProps:(req,res,next)=>{
        req.app.get('db').get_all_properties().then( properties => {
            res.status(200).send(properties)
        })
    }
}