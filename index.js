const express = require('express')
const mongoose = require('mongoose')

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const port = process.env.port || 8000;

mongoose.connect(
  "mongodb+srv://baokhanhz1005:AuldLangSYnE08P@cluster0.5epxgqg.mongodb.net/TradingData?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get("/", (request, response) =>{
    response.json({
        message: `project BE trading bot is running`
    })
})

// Routes
require('./routes')(app);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
