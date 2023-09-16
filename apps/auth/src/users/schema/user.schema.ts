import * as mongoose from "mongoose"

export const userSchema = new mongoose.Schema({
    email: { type: String },
    phone: { type: String },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: false },
    subscribed: { type: Boolean, required: false, default: false },
})