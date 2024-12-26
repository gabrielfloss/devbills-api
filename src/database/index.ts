import mongoose from "mongoose";

export async function setupMongo(): Promise<void> {
    try{
        if (mongoose.connection.readyState === 1){
            return;
        }
        
        console.log("🎲 Connecting to DB...");
        console.log("mongodb://devbills:pass123@mongodb:27017/")
        await mongoose.connect("mongodb://devbills:pass123@mongodb:27017/" as string)
        console.log("✅ DB connected!") 
    }catch{
        throw new Error("❌ DB not connected.")
    }
}