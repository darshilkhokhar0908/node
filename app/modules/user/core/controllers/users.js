var express = require('express');
var router = express.Router();

const register = async (req, res, next) => {
    try {
        await Services.User.register(req.body);
        return res.send({message: "User successfully register"});
    } catch (err) {
        return next(err);
    }
}

const login = async (req, res, next) => {
    try {
        let user = await Services.User.login(req.body);
        return res.send({message: user});
    } catch (err) {
        return next(err);
    }
}

const getUser = async (req, res, next) => {
    try{
        return res.send({data: req.user, message: "user successfully fetched"})
    } catch (err) {
        return next(err);
    }
}

const resetPassword = async (req, res, next) => {
    try{
        const user = await Services.User.resetPassword(req.body);
        return res.send({user});
    } catch (err) {
        return next(err);
    }
}

router.post('/', register);
router.post('/login', login);
router.post('/reset', resetPassword);

router.get('/', Auth.check, getUser);

module.exports = router;
