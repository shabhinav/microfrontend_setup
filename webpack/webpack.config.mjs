import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: './src/index.mjs',
  output: {
    publicPath: 'auto',
  },
  experiments: {
    outputModule: true, // Enable module output
  },  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx','.mjs']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.container.ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        remoteApp: 'remoteApp@http://localhost:5173/assets/remoteEntry.js'
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.0.0',
          eager: true
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.0.0',
          eager: true
        }
      }
    })
  ],
  devServer: {
    port: 3000,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // Transpile modern JavaScript
              '@babel/preset-react', // Handle JSX
            ],
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: [
          'style-loader', // Inject styles into DOM
          'css-loader',   // Interpret `@import` and `url()` in CSS
        ],
      },
    ],
  },
};