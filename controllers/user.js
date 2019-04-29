const {User} = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
class Controller {
    static signUp (req,res){
        User
        .create(req.body)
        .then(() =>{
            res.status(201).json({
                msg : 'Succesfully Sign Up'
            })
        })
        .catch(e=>{
            res.status(400).json({
                msg : e.message
            })
        })
    }

    static signIn(req,res){
        User.findOne({
            where : {
                username : req.body.username
            }
        })
        .then(user=>{
            if(user) {
                const checkpass = bcrypt.compareSync(req.body.password,user.password)
                if(checkpass){
                    const payload = {
                        id : user.id,
                        username : user.username
                    }
                    const token = jwt.sign (payload,process.env.JWT_SECRET_KEY)
                    res.status(200).json({token})
                }else {
                    res.status(404).json({
                        msg : 'username/password wrong'
                    })
                }
            }else {
                res.status(404).json({
                    msg : 'username/password wrong'
                })
            }
        })
        .catch(e=>{
            res.status(500).json ({
                msg : e.message
            })
        })
    }
}

module.exports = Controller