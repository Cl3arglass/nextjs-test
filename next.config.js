 module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
    ]
  },
}