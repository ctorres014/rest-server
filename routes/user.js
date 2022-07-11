const { Router } = require('express');
const { Route } = require('express');
const { userGet, userPut, userDelete, userPost } = require('../controller/user');

const router = Router();

router.get('/', userGet);

router.post('/', userPost)

router.put('/:id', userPut)

router.delete('/', userDelete)

module.exports = router;