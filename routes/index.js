/**
 * @desc    主页路由
 * @author  吴涛
 * @date    2017/12/12
 */

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'FrankWu', imgSrc: '/images/me.jpg'});
});

module.exports = router;
