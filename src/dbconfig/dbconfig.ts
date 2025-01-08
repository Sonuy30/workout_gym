import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.once('connected', () => {
            console.log('MongoDB connected');
        })
        connection.on('error, (error) => {
            console.log('MongoDB connection error.please make sure that MongoDB is running' + error);
            process.exit();
        })
        
    } catch (error) {
        console.log('Error connecting to database: ', error);
        console.log('error');
    }
}