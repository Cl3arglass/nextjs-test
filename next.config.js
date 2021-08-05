module.exports = {
    async rewrites() {
      return [
        {
          source: '/:path*',
          has: [
              {
                  type: 'host',
                  value: '(?<hostname>.+)'
              },
          ],
          destination: '/:path*?x-host=:hostname',
        },
      ]
    },
  }