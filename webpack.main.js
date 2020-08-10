module.exports = function(config) {
    //was using awesome-ts-loader earlier, but for w/e reason it was breaking
    // the electron template menu from working... 
    //switched to electron-webpack-ts which is setup as a loader automatically

    //disadvantages of using webpack-electron-ts is it uses ts-loader which
    //  does not work with HMR
    
    //console.log(JSON.stringify(config, null, 4))
  
    return config
  }