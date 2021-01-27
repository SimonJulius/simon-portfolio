/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-scss-typescript",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[name]_[local]___[hash:base64:5]_[emoji:1]",
        },
        sassLoaderOptions: {
          includePaths: [path.resolve(__dirname, "./src/styles/scss")],
        },
        cssMinifyOptions: {
          assetNameRegExp: /\.optimize\.css$/g,
          canPrint: true,
        },
        cssExtractOptions: {
          filename: "[name].css",
          chunkFilename: "[id].css",
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
}
