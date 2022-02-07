module.exports = {
  module: {
      rules: [
         {
            test: /\.(graphql|gql)$/,
            loader: 'graphql-tag/loader',
            exclude: /node_modules/,
         }
      ]
  }
}