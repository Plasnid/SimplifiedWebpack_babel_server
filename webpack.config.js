//common js module for path(eg.  where our folder is)
const path = require('path');
module.exports = {
    //webpack config starts here
    //entry point for conversion
    entry: './src/index.js',

    //output, where our files compile to
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'main.js'
    },
    devServer:{
        port: 3200, //the port we will use this time around
        contentBase: path.join(__dirname, 'dist') //changing the server to go from dist
    },
    //watch for all the js changes
    watch: true,
    //provice a source map to help with debug
    devtool: 'source-map',
    module: {
        //rules for what to convert
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    }
}