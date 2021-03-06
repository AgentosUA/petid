const withImages = require('next-images')
const envs = require('./config/local.json');
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {
    return config
  },
  devIndicators: {
    autoPrerender: false,
  },
  // ENVs
  env: envs ? { ...envs } : {},
})