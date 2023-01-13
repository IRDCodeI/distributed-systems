const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bycript = require("bcryptjs");
const userController = {};

userController.getUsers = async (req, res) => {
    const {email} = req.params;
    const user = await User.findOne({email});
    res.json(user);
};

userController.registerUser = async (req, res) => {
    const user = new User(req.body);
    user.email = req.body.email;
    user.password = req.body.password;

    let salt = bycript.genSaltSync(8);
    let hash = bycript.hashSync(user.password, salt);

    user.password = hash;

    await user.save();
    const token = jwt.sign({ _id: user._id }, "secret");
    res.status(200).json({ token });
};

userController.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(401).send("Usuario no Existe");

    const hashSave = user.password;
    const verify = bycript.compareSync(password, hashSave);

    if (!verify) return res.status(401).send("Clave Erronea");

    const token = jwt.sign({ _id: user._id }, "secret");
    res.status(200).json({ token });
};

userController.getDash = async (req, res) => {
    res.json("status: Dashboard");
};

userController.updateUser = async (req, res) => {
    const { email, password } = req.body;
    const user = req.body;

    let salt = bycript.genSaltSync(8);
    let hash = bycript.hashSync(user.password, salt);

    user.password = hash;

    const getUser = await User.findOne({ email });
    await User.findByIdAndUpdate(
        { _id: getUser._id },
        { $set: user },
        { new: true }
    );

    res.status(200).json("status: Actualizado");
};

module.exports = userController;
