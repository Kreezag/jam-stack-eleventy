module.exports = (config) => {
  config.setBrowserSyncConfig({
    https: {
      key: '/etc/localhost.key',
      cert: '/etc/localhost.cert'
    }
  });
  
  config.addPassthroughCopy("src/js")
  
  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data'
    }
  }
}
