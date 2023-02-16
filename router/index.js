const homeController = require('../controllers/home.controller');
const messageController = require('../controllers/message.controller');


const router = require('express').Router()

router.get('/', homeController.getHome);
router.get('/message', messageController.getMessages);
router.get('/message/ajouter', messageController.getForm);
router.post('/message/ajouter',messageController.postMessage);




module.exports=router;