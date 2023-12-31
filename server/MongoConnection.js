import mongoose from "mongoose"

// const MONGO_URI = process.env.MONOG_URI ;
// if(!MONGO_URI) throw new Error("Invalid environment variable : MONGO_URI")

export const MongoConnection = ()=>{
  mongoose.connect("mongodb+srv://AhmedShtya:rfOVazyZ1puX7cHD@cluster0.xgw84zk.mongodb.net/BlogNextJs?retryWrites=true").then(res => console.log(res.connection.host)).catch(err => console.log(err))
}