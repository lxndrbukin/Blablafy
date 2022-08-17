const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/authorize', '/register'],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
};
