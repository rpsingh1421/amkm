import  mongoose  from "mongoose";
import DonorModel from "./donorModel";

const onlineDonationSchema = new mongoose.Schema({
    citizenship:{
        type:String,
        required:true
    },
    donorName:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        // required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    panNumber:{
        type:String,
        required:true
    },
    aadhaarNumber:{
        type:Number,
        required:true
    },
    donor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'donors'
    }
},{timestamps:true});

const OnlineDonationModel = mongoose.models.online_donations || mongoose.model('online_donations',onlineDonationSchema);

export default OnlineDonationModel;
