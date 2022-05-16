const { createProxyMiddleware } = require('http-proxy-middleware');
// const pkg = require("../package.json");


module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3030',
            changeOrigin: true,
        })
    );
};