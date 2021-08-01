const axios = require('axios')

module.exports = async function () {
  try {
    const result = await axios.get('https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=a2c83e699b7b4b8380ad4daea6848e61')
    
    return result.data;
  } catch (e) {
    console.error(e)
  }
}

