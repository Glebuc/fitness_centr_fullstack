const Router = require('express')
const router = new Router()
const news_controller = require('../controllers/price_controller')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', news_controller.create)
router.get('/', news_controller.getAll)
router.get('/:id_news', news_controller.getOne)

module.exports = router