
import { mongoose } from "mongoose";

const visitorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type: Number,
        min: [1000000000, 'not a valid number'],
        max: [9999999999,'should not exceed 10 digit'],
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    read: {
        type: Boolean,
        default: false
    },
    trash: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

const VisitorModel = mongoose.models.visitors || mongoose.model('visitors', visitorSchema);
export default VisitorModel;