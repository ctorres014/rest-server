const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Database online');
    } catch (error) {
        console.log(error);
        throw new Error('error initializing database');
    }
}


module.exports = {
    dbConnection
}