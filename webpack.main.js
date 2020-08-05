const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = function(config) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>MAIN CONFIG OBJECT<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

    //['.ts', '.tsx', '.js', '.jsx'].forEach(ext=>config.resolve.extensions.push(ext))
    config.resolve.extensions.push('.ts')

    config.devtool = 'source-map'
    
    config.module.rules.push({
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      })
    
      config.plugins.push(
          new CheckerPlugin()
      )
    console.log(JSON.stringify(config, null, 4))
  
    return config
  }