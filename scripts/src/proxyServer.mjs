import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/awesome-devlog', createProxyMiddleware({
  target: 'https://awesome-devblog.netlify.app',
  changeOrigin: true,
  pathRewrite: {
    '^/awesome-devlog': '', // Removes /api from the request path
  },
})).use('/devo', createProxyMiddleware({
  target: 'https://devo-platforms.burakkarakan.com',
  changeOrigin: true,
  pathRewrite: {
    '^/devo': '',
  }
})).use('/geek', createProxyMiddleware({
  target: 'https://news.hada.io',
  changeOrigin: true,
  pathRewrite: {
    '^/geek': '',
  }
})).use('/jhrogue', createProxyMiddleware({
  target: 'https://jhrogue.blogspot.com/',
  changeOrigin: true,
  pathRewrite: {
    '^/jhrogue': '',
  }
}))

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});