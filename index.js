const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const ExpressCache = require('express-cache-middleware')
const cacheManager = require('cache-manager')
const livenessCheck = require('./src/middleware/livenessCheck');
const errorHandler = require('./src/middleware/errorHandler');
const cacheMiddleware = require('./src/middleware/cache');
const routes = require('./src/routes/router');
const fs = require('fs');
const csvParser = require('csv-parser');

// Setup env
require('dotenv').config();

const app = express();

// app.locals.data = data;

//Middleware
app.use(compression());
app.use(morgan('combined'));
cacheMiddleware.attach(app)
app.use(livenessCheck);

//Send up Routes
app.use('/api', routes );

//Error Handler
app.use(errorHandler)


const port = process.env.PORT || 3000;

result = []
fs.createReadStream("./src/csv/Mobile_Food_Facility_Permit.csv").pipe(csvParser()).on("data", (data) => {
    result.push(data);
}).on("end", () => {
    console.log(`${result.length} data points`);
    app.locals.data = result
    app.listen(port, () => console.log(`Listening on port ${port}...`))
});
