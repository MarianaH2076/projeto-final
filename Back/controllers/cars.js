const db = require("../infra/connection");
const Car = require("../dao/car");

exports.createOne = (req, res) => {
    Car.createOne(req.body, (err) => {
        if(!err){
            res.status(201).send({})
        } else {
            res.status(400).send({ err })
        }
    });
};

exports.getAll = (req, res) => {
    Car.getAll((err, data) => {
        res.send(data);
    })
};

exports.getOne = (req, res) => {
    Car.getOne(req.params.id, (err, data) => {
        if (!err) {
            res.status(200).send(data);
        } else {
            res.status(404).send("Car not found");
        }
    })
};

exports.changeOne = (req, res) => {
    Car.changeOne(req.params.id, req.body, (err) => {
        if(err) {
            res.status(400).end({msg: err})
        } else {
            res.status(204).end();
        };
    });
};

exports.removeOne = ((req, res) => {
    Car.removeOne(req.params.id, (err) => {
        if (!err) {
            res.status(204).end();
        }
        //COMO EU COLOCO UMA MENSAGEM SE O CARRO NÃO EXISTIR?
    });    
});