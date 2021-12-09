// module.exports = {
//     async rewrites() {
//       return {
//             beforeFiles: [
//         {
//           source: '/dogs',
//           destination: 'https://montidogs-poc.vercel.app',
//           basePath: false,
//         },
//       ],
//      }
//     },
//   }

  module.exports = {
    async rewrites() {
      return [
          {
            source: '/dogs',
            destination: 'https://montidogs-poc.vercel.app',
            basePath: false,
          },
        ]
    }
  }