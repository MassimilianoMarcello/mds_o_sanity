
module.exports = {
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        domains: ['s5zezdma.api.sanity.io', 'cdn.sanity.io'],
        pathname: '/images/s5zezdma/production/*',
      },
    ],
  },
};


