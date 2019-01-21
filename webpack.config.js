const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //verifica cualquier archivo que termine en js o jsx
        exclude: /node_modules/, //excluye node_modules
        use: {
          loader: "babel-loader" //utiliza babel para transpilar el código
        }
      },
      {
        test: /\.html$/, //verifica cualquier archivo que termine en html
        use: [
          {
            loader: "html-loader" //utiliza html-loader para transpilar el código
          }
        ]
      }
    ]
  },
  /* se instaló html-webpack-plugin html-loader 
  para que webpack pueda procesar y crear el html */
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};