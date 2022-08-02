  module.exports = {
    rewrites() {
      return {
          afterFiles: [
              // if the host is `app.acme.com`,
              // this rewrite will be applied
              {
                  source: '/:path*',
                  has: [
                      {
                          type: 'host',
                          value: 'about.holdenaltaffer.com',
                      },
                  ],
                  destination: '/posts/:path*',
              },
          ]
      }
  }
  }