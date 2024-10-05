const express = require('express');
const connection = require('./db/connection');
const cors = require('cors');
const customerRouter = require('./router/customerRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use(customerRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});