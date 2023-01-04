// import mongoose npm package
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

// Return a mongoose object with the connection to the database
export async function connectToDB() {   
    try {
        console.log("Connecting to database")
        const string = `mongodb+srv://multibot:nYGG7ffgNnpz5N0m@cluster0.v56lls6.mongodb.net/test`
        // Connect to localhost using mongoose
        const mongooseObject = await mongoose.connect(string)
        console.log("Connected to database")
        return mongooseObject;
    } catch(err) {
        console.log(err)
        throw new Error("Failed to connect to database");
    }
}