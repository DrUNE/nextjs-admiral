const modulesToTranspile = ['@admiral-ds/react-ui','@admiral-ds/flags'];
const withTM = require('next-transpile-modules')(modulesToTranspile)

// used by JSON stringify to fix circular references
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // For debug 
    // console.log(`>>>> ${JSON.stringify(defaultLoaders, getCircularReplacer(), 2)}`);

    config.module.rules.unshift({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
        },
      },
    },)

    config.module.rules.unshift({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { dimensions: false, svgProps: { focusable: '{false}' } } }],
    });

    // Important: return the modified config
    return config
  },

}

module.exports = withTM(nextConfig)