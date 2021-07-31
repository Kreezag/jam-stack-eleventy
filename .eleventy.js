module.exports = (config) => {
  config.addPassthroughCopy("src/js")
  
  return {
    dir: {
      input: 'src',
      output: 'dist',
    }
  }
}
