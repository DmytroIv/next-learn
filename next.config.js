/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['domain-for.images']
  },
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      issuer: /.{js|ts}x?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{
            name: 'preset-default',
            params: {
              override: {
                removeViewBox: false
              }
            }
          }]
        },
        titleProp: true
      },
      test: /\.svg$/
    });

    return config;
  }
};

module.exports = nextConfig;
