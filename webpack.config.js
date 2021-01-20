module.exports = {
    entry: './app/app.module.ajs.ts',
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.ts', '.css']
    },
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
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