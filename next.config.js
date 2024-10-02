module.exports = {
    async redirects() {
      return [
        {
          source: '/_next/image',
          destination: "https://google.com",
          permanent: true,
        },
      ]
    },
  }