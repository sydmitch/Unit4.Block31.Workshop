// import and initialize express app

const PORT = 3000;
// this middleware deals with CORS errors and allows the client on port 5173 to access the server
const cors = require('cors');
// morgan is a logging library that allows us to see the requests being made to the server
const morgan = require('morgan');

// set up express middleware
app.use(morgan('dev'));
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set up intial hello world route

// set up api router

// set up error handling

// initialize server (listen)
