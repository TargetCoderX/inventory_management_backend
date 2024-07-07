const express = require('express');
const { authRoutes, protectedRouter } = require('./routes/routes');
const { connectMongo } = require('./database/mongoConnection/connect');
const cors = require('cors');
const { corsOptions } = require('./config/Cors');

require('dotenv').config()
const app = express();
app.use(express.json());
// app.use(cors(corsOptions));
app.use(cors());
connectMongo().then(() => {
    /* registering the route */
    app.use('/api', authRoutes);
    app.use('/api',protectedRouter)


    app.listen(process.env.PORT, () => {
        console.log(`Server is running on PORT:${process.env.PORT}`);
    })
}).catch(error => {
    console.log("Cannot connect to mongodb" + error);
})


