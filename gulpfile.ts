const { series, parallel, src, dest } = require('gulp');
const _ts = require("gulp-typescript");
var _jest = require('gulp-jest').default;
type callback = () => void

function transpile (cb:callback):void {
    var tsconfig = require("./tsconfig.json");
    src(tsconfig.paths["@App/*"])
      .pipe(_ts(tsconfig.compilerOptions))
      .pipe(dest(tsconfig.compilerOptions.outDir));
    cb();
}

function jest(cb:callback):void{
    var jest_config = require("./package.json").jest;
    src(jest_config.testMatch).pipe(_jest({
        "preprocessorIgnorePatterns": [
          "<rootDir>/dist/", "<rootDir>/node_modules/"
        ],
        "automock": false
      }));
    cb()
}


exports.build = series(transpile, jest);