module.exports = {
  images: {
    domains: ['rb.gy'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    });
    return config;
  },
};
