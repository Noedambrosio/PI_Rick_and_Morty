const express = require ('express');
const getCharById = require ('../controllers/getCharById');
const userLogin = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const router = express.Router();

router.get('/character/:id', getCharById)
router.get('/login/', userLogin);
router.get('/handleFavorites')
router.post("/fav",postFav);
router.delete("/fav/:id", deleteFav);

//si no llegan a funcionar, quitar las barras finales y el :id final
module.exports = router;