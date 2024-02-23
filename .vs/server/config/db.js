const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectDB = async() => {

    try{

        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected');

    }
    catch (error) {

        console.log(error);
        console.log('Faled to connect to db');

    }
}

module.exports = connectDB;