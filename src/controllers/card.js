let cardModel = require("../models/card");
let autoincrement = require("autoincrement").from(100);

let createCard = async function (req, res) {
    try {
        let data = req.body;
        data.cardNumber = "CN" + (autoincrement + 1);
        let createData = await cardModel.create(data);
        return res
            .status(201)
            .send({ status: true, msg: "Success", data: createData });
    } catch (err) {
        return res.status(500).send({ status: true, msg: err.message });
    }
};