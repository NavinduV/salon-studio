import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Salon-Data",
    }).then(() => {
        console.log("MongoDB Connected Successfully.")
    }).catch((error)=> {
        console.log("Can not Connect to the Database.")
        console.log(error);
    })
}