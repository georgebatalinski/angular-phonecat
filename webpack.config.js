module.exports = {
    entry: './app/index.js',
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
        ],
    },
    output: {
        filename: 'bundle.js'
    },
    optimization: {
		minimize: false
	},
};