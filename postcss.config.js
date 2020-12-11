const plugins = {
  tailwindcss: {},
  autoprefixer: {},
}

const productionPlugins = {
  "@fullhuman/postcss-purgecss": {
    content: [
      './public/pages/**/*.{ts,tsx}',
      './public/components/**/*.{ts,tsx}',
      './public/index.html'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
  cssnano: {}
}

if (process.env.NODE_ENV === "production") {
  Object.entries(productionPlugins).forEach(([plugin, config]) => plugins[plugin] = config)
}

module.exports = {
  plugins
}
