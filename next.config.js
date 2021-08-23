module.exports = {
  async rewrites() {
    afterFiles: [
      // These rewrites are checked after headers/redirects
      // and before all files including _next/public files which
      // allows overriding page files
      {
        source: '/',
        destination: '/about',
        has: [{ type: 'query', key }],
      },
    ]
  },
}