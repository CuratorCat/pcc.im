/**
 * @type {import('next').NextConfig}
 */
const withPWA = require('next-pwa')

const ENV = {
  infuraKey: process.env.INFURA_KEY === '' ? null : process.env.INFURA_KEY,
  useWebSocket: process.env.USE_WEBSOCKET === 'true' ? true : false,
}

module.exports =
  process.env.NODE_ENV === 'production'
    ? withPWA({
        pwa: {
          dest: 'public',
        },
        env: ENV,
      })
    : {
        env: ENV,
      }
