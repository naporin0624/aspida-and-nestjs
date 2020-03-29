import { Configuration } from "webpack";
import { join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
const mode = process.env.NODE_ENV === "development" ? "development" : ("production" as const);
const config: Configuration = {
  entry: [
    "./views/App.tsx",
    "babel-polyfill",
    ...(mode === "development" ? ["webpack-hot-middleware/client?reload=true&timeout=1000"] : []),
  ],
  mode,
  resolve: {
    alias: {
      "@": join(__dirname, "views"),
      apis: join(__dirname, "apis"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        type: "javascript/auto",
        use: [
          {
            loader: "json-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
              plugins: ["@babel/proposal-class-properties", "@babel/proposal-object-rest-spread"],
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "js/[name]-[hash].js",
    path: join(__dirname, "dist/public"),
    publicPath: "/",
  },
  plugins: [new HtmlWebpackPlugin({ template: join(process.cwd(), "public/index.html") })],
  ...(mode === "production"
    ? {
        optimization: {
          splitChunks: {
            cacheGroups: {
              vendors: {
                test: /node_modules/,
                name: "vendor",
                enforce: true,
                chunks: "all",
              },
            },
          },
        },
      }
    : {}),
};

export = config;
