const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    proxy: {
      '/v1_0': {
        target: 'https://geek.itheima.net',
        changeOrigin: true
      }
    }
  }
}