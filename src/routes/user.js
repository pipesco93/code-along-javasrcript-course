const express = require('express');
const {getAllUsers,
        getUserId,
        search,
        formNewUser,
        postUser,
        userEdit,
        editConfirm,
        admin
        } = require('../controllers/userControllers');

const routerUser = express.Router();

// Se requiere el middleware isAdmin
const isAdmin = require('../middleware/adminMiddleware')

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,"../../public/images/usuarios/"));
    },

    filename: (req, file, cb) => {
        const newFile = `user-${Date.now()}_img${path.extname(file.originalname)}`//date now milisegundos desde 1970, un numero muy grande,
        // path.extname me trae la extension del archivo original 
        cb(null,newFile);
    }
});

const upload = multer({storage})

routerUser.get('/users',getAllUsers);
routerUser.get('/user/:id', getUserId);
routerUser.get('/search', search);

routerUser.get('/new-user',formNewUser);
routerUser.post('/new-user', upload.single('img') , postUser);

routerUser.get('/user-edit/:id', userEdit);
routerUser.put('/user-edit', upload.single('img') , editConfirm)

routerUser.get('/admin', isAdmin ,admin);

module.exports = routerUser;