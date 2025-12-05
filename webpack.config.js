const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
 mode: 'development',
 entry: {
    
    // we define two entrepoints of the application
    // 1 ) main - index.tsx
    // 2) another - anotherEntry.tsx

   main: './src/index.tsx',
   another: './src/anotherEntry.tsx'
 },
 output: {

    // Output, everything will be built inside dist folder
    // publicPath / 
    // main.bundle.js for the first entrypoint
    // another.bundle.js for the second entrypoint
   filename: '[name].bundle.js',
   path: path.resolve(__dirname, 'dist'),
   publicPath: '/'
 },
 resolve: {
   extensions: ['.ts', '.tsx', '.js', '.jsx']
 },
 // ts loaders, css loaders and js loaders...
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       use: 'ts-loader',
       exclude: /node_modules/
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 },
 devServer: {
   static: {
       directory: path.join(__dirname, 'dist'),
     },
     compress: true, // Enables gzip compression for everything served
     port: 3000, // Port to access your dev server
     historyApiFallback: true, // Enables HTML5 mode
     hot: true, // Hot Module Replacement (HMR) feature
     open: true, // Opens the browser after the server starts
 },
 plugins: [
    // I will have two html file
    // index.html will be linked to main entrypoint, main.bundle.js [first point]
    // another.html will be linked to antoher entrypoint, another.bundle.js [second entrypoint]
   new HtmlWebpackPlugin({
     template: './public/index.html',
     chunks: ['main'] // Default entry point
   }),
   new HtmlWebpackPlugin({
     template: './public/another.html',
     filename: 'another.html',
     chunks: ['another'] // Additional entry point
   })
 ],
 optimization: {
    // perform code splitting to handle vendor chunks  / libraries
   splitChunks: {
     chunks: 'all',
     name: 'vendors',
   }
 }
};
