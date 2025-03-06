/* import and initialize express app */
const express = require('express');
const app = express();

const PORT = 3000;
/* this middleware deals with CORS errors and allows the client on port 5173 to access the server */
const cors = require('cors');

/* morgan is a logging library that allows us to see the requests being made to the server */
const morgan = require('morgan');

/* set up express middleware */
app.use(morgan('dev'));
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* set up intial hello world route */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

/* set up api route */
app.get('/api/employees', (req, res) => {
  res.send()
});

/* our middleware won't capture 404 errors, so we're setting up a separate error handler for those*/
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});
/* initialize server (listen) */
const init = async () => {
  console.log('data seeded');
  app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
  });
};

init();