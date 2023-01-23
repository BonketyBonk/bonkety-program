Allows you to modify the resolve section of webpack config.  
see https://webpack.js.org/configuration/resolve/ for all config options.

In `craco.config.js` file
```js
const webpack = require("webpack")
const webpackResolve = require("craco-webpack-resolve")

//for example, if we need to add the zlib fallback
module.exports = {
    plugins: [{ 
        plugin: webpackResolve,
        options: {
            resolve: {
                fallback: {
                    zlib: require.resolve('browserify-zlib')
                }
            } 
        }
    }]
};
```