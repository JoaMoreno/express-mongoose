const Mtga = require("../model/mtga.model");
const mtgaCtrl = {};

mtgaCtrl.getAllData = async (req, res) => {
    const data = await Mtga.find() // Return all
    res.json(data);
};

mtgaCtrl.getData = async (req, res) => {
    const data = await Mtga.findById(req.params.id);
    res.json(data);
};

mtgaCtrl.createData = async (req, res) => {
    const data = new Mtga(req.body);
    await data.save();
    res.json({
        status: "Data Saved"
    })
};

mtgaCtrl.deleteData = async (req, res, next) => {
    await Mtga.findByIdAndRemove(req.params.id);
    res.json({ status: 'Deleted' });
};

module.exports = mtgaCtrl;