const path = require('path')

module.exports = function(config) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>RENDERER CONFIG OBJECT<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
    config.entry.renderer.push(
        path.join(process.cwd(), 'src/renderer/Main.purs')
    )
    
    config.module.rules.push({
        test: /\.purs$/,
        loader: 'purs-loader',
        exclude: /node_modules/,
        query: {
          pscBundle: "spago",
          pscBundleArgs: {
            _: ['bundle-app']
          },
          src: ['src/renderer/**/*.purs'],
          spago:true,
          output: path.join(process.cwd(), 'dist/renderer/[name].js')
        }
    })

    console.log(JSON.stringify(config, null, 4))
  
    return config
  }