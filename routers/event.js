const Router = require('koa-router');
const router = new Router({ prefix: '/event'});
const { backChallenge } = require('../controllers/eventControllers.js');

router.post('/', backChallenge);

module.exports = router.routes();
