module.exports = {
    entry: './app/index.js',
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.css']
    },
    output: {
        filename: 'bundle.js'
      }
};