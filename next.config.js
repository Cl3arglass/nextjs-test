module.exports = {
    async rewrites() {
      return [
        {
          source: '/dogs',
          destination: 'https://montidogs-poc.vercel.app',
        },
      ]
    },
  }