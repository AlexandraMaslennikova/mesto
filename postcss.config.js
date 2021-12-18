const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  devtool: 'source-map',
  plugins: [
    autoprefixer,
    cssnano({ preset: 'default' })
  ]
};