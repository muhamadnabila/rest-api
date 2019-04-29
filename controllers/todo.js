const {Todo} = require('../models')

class Controller {
    static getAll(req, res) {
        Todo
            .findAll(
                {
                    where : {
                    UserId : req.decode.id       
                    }
                }
            )
            .then(todos => {
                res.status(200).json({
                    todos
                })
            })
            .catch(e => {
                res.status(500).json({
                    msg: e.message
                })
            })
    }
    static getByPk (req, res){
        Todo
            .findByPk(req.params.id)
            .then(todo => {
                res.status(200).json({
                    todo
                })
            })
            .catch(e=>{
                res.status(500).json({
                    msg : e.message
                })
            })
    }
    static create (req, res){
        req.body.UserId = req.decode.id
        Todo
            .create(req.body)
            .then(() => {
                res.status(200).json({
                    msg : 'succesfully create new todo'
                })
            })
            .catch(e=>{
                res.status(500).json({
                    msg : e.message
                })
            })
    }
    static delete (req, res) {
        Todo
            .destroy(
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            .then(() => {
                res.status(200).json({
                    msg : 'succesfully delete todo'
                })
            })
            .catch((e) => {
                res.status(500).json({
                    msg : e.message
                })
            })
    }
    static update (req, res) {
        Todo.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
        .then(()=>{
            res.status(200).json({
                msg : 'succesfully update data todo'
            })
        })
        .catch(e=>{
            res.status(500).json({
                msg : e.message
            })
        })
    }
}
module.exports = Controller