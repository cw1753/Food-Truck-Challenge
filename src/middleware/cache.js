const ExpressCache = require('express-cache-middleware')
const cacheManager = require('cache-manager')

const hydrateManyThings = async (req, res, data) => {
    // Parse as JSON first
    try {
      JSON.parse(data)
      res.contentType('application/json')
      return data
    } catch ( err ) {}
   
    const guess = fileType(data.slice(0, 4101))
    if( guess ) {
      res.contentType(guess.mime)
    }
    return data
}

// Setup Cache
const cacheMiddleware = new ExpressCache(
    cacheManager.caching({
        store: 'memory', max: 10000, ttl: 3600
    }), {
        hydrate: hydrateManyThings
    }
)

module.exports = cacheMiddleware;