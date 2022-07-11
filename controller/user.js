const { reponse } = require('express');


const userGet = (req, res = reponse) => {
    const { page, limit } = req.query;
    res.status(200).json({
        'message': 'request get from controller',
        page,
        limit
    })
}

const userPost = (req, res = reponse) => {
    const body = req.body;
    res.status(200).json({
        'message': 'request post from controller',
        body
    })
}

const userDelete = (req, res = reponse) => {
    res.status(200).json({
        'message': 'request delete from controller'
    })
}

const userPut = (req, res = reponse) => {
    const id = req.params.id;
    const { nombre } = req.body;
    // const { userId } = req.params;
    
    res.status(200).json({
        'message': 'request put from controller',
        id,
        nombre
    })
}

module.exports = {
    userGet,
    userPost,
    userDelete,
    userPut
}