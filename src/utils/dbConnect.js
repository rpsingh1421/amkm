import mongoose from "mongoose";

const USERNAME=process.env.MONGO_USERNAME;
const PASSWORD=process.env.MONGO_PASSWORD
const DATABASE =process.env.MONGO_DATABASE
const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.7hxv9y9.mongodb.net/${DATABASE}?retryWrites=true&w=majority&appName=Cluster0`




const connect = async () => {
    
    if (mongoose.connection.readyState) {
        console.log("MongoDB is already connected.");
        return;
    }
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("Mongo Connection successfully established.");
    } catch (error){
        console.error("Error connecting to mongoose:",error);
    }
}

export default connect;