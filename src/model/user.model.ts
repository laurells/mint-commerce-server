import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String ,
    role: {
        enum: ['Admin' , 'User']
    }
})


module.exports = mongoose.model("User", userSchema);