import UnpluginParcelMacros from 'unplugin-parcel-macros'

const plugin = UnpluginParcelMacros.webpack()

/** @type {import('next').NextConfig} */
export default {
  webpack(config) {
    config.module.rules.push({
      test: /\.(?:jsx?|tsx?|mdx?)$/,
      exclude: /node_modules/,
      use: [{ loader: './loader' }],
    })
    config.plugins.push(plugin)
    return config
  },
}
