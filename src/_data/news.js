const axios = require('axios')
const countries = require('./countries.json')
require('dotenv').config()

async function getCountryNews (country) {
  try {
    const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`)
    
    return {
      country,
      articles: result.data.articles
    };
  } catch (e) {
    console.error(e)
  }
}

module.exports = async function () {
  const newsPromises = countries.map(getCountryNews)
  
  return Promise.all(newsPromises).then((result) => {
    return Array.from(result).filter(Boolean)
  })
}
