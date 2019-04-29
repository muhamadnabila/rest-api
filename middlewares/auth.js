const jwt = require('jsonwebtoken')
const {Todo} = require('../models')
function authenticate(req,res,next) {
    if(req.headers.hasOwnProperty('token')){
        try {
            const decode = jwt.verify(req.headers.token,process.env.JWT_SECRET_KEY)
            req.decode = decode
            next()
        }
        catch(err) {
            res.status(400).json({
                msg : 'not authenticated'
            })
        }
    }else {
        res.status(400).json({
            msg : 'token not assigned'
        })
    }
}

function authorize(req,res,next) {
        Todo.findByPk(req.params.id)
        .then(todo =>{
            if(todo.UserId == req.decode.id){
                next()
            }else {
                res.status(400).json({
                    msg : 'not authorized'
                })
            }
        })
}
module.exports = {
    authenticate : authenticate,
    authorize : authorize
}