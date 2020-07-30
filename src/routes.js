const { Router } = require('express');

const routes = new Router();

routes.get('/teste', (req, res) => {
    return res.json({ ok: true });
});

module.exports = routes;