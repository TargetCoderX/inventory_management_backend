const mongoose = require('mongoose');
async function connectMongo() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
        console.log("Mongo Db Database Connected");
    } catch (error) {
        console.log('Mongo DB database connection error');
    }
}

module.exports = {
    connectMongo,
};