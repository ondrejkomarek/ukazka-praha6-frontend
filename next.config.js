require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL
  },
  images: {
    domains: ['167.99.134.160'],
  },
}
