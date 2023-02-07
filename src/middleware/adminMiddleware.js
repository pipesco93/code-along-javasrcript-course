const { render } = require("ejs");

const isAdmin = (req, res, next) => {
    const {isAdmin} = req.body;
    if(isAdmin){
        next();
    }else{
        res.status(403).send("No eres Admin");
    }
};

module.exports = isAdmin;