const isPro = Object.is(process.env.NODE_ENV, 'production');

module.exports = {
  baseUrl: isPro ? 'http://106.15.228.252:5000/' : 'api/'
};
