const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
// !! to variable environment
const config = require("../config");
const userCtrl = {};

userCtrl.getAllData = async (req, res) => {
    const data = await User.find() // Return all
    res.json(data);
};

userCtrl.profile = async (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(401).json({
            auth: false,
            message: "No token provided"
        });
    }
    const decoded = jwt.verify(token, config.secret);
    const user = await User.findById(decoded.id, { password: 0});
    if (!user){
        return res.status(404).json({
            message: "No user found"
        });
    }
    res.json(user);
};

userCtrl.login = async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(!user) {
        return res.status(404).send("The email doesn't exists")
    }
    const validPassword = await user.comparePassword(req.body.password, user.password);
    if (!validPassword) {
        return res.status(401).send({auth: false, token: null});
    }
    console.log(passwordIsValid)
    res.json("Test");
};

userCtrl.createData = async (req, res) => {
    const data = new User(req.body);
    // Utiliza el methods desde el modelo - JSON.stringify ({""} to "")
    data["password"] = await data.encryptPassword(JSON.stringify(data["password"]));
    await data.save();
    // Json Web Token
    const token = jwt.sign({id: data["_id"]}, config.secret, {
        expiresIn: 60 * 60 * 12
    })

    res.json({auth: true, token})
};

userCtrl.deleteData = async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: 'Deleted' });
};

module.exports = userCtrl;