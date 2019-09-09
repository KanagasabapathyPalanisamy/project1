import express from 'express';
import logger from 'morgan';
import { json, urlencoded } from 'body-parser';
// This will be our application entry. We'll setup our server here.
import { createServer } from 'http';
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(json());
app.use(urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
message: 'Welcome to the beginning of nothingness.',
}));
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = createServer(app);
server.listen(port);
export default app;