const axios = require('axios')
const countries = require('./countries.json')
require('dotenv').config()

async function getCountryNews (country) {
  try {
    const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`)
    
    return result.data || []
  } catch (e) {
    console.error(e)
  }
}

module.exports = async function () {
  return getCountryNews(countries.join(',')).then((result = []) => {
  
    return Object.entries(
      result.filter(Boolean).reduce((res, item) => ({
        ...res,
        [item.country]: [ ...res[item.country], item ]
      }), {})
    )
      .reduce((res, [key, value]) => ({
        country: key,
        articles: value
      }), [])
  })
}
