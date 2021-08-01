const axios = require('axios')
require('dotenv').config()

module.exports = async function () {
  try {
    const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=${process.env.API_KEY}&pageSize=5`)
    
    return result.data;
  } catch (e) {
    console.error(e)
  }
}

