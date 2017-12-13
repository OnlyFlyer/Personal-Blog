/**
 * @desc    主页路由
 * @author  吴涛
 * @date    2017/12/12
 */

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Frank Wu', name: 'Frank Wu', hobby: 'Code && Games', jsSrc: '/javascripts/canvas.js'});
});

/* GET rating page. */
router.get('/ratings', function(req, res, next) {
  res.render('ratings', { title: 'ratings', sec: 'selecte', info: '哈哈, 进入了rating页'});
});

/* GET review page. */
router.get('/review', function(req, res, next) {
  res.render('review', { title: 'review', sec: 'selecte', info: '哈哈, 进入了review页'});
});

module.exports = router;
