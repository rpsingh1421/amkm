import  mongoose  from "mongoose";

const donorSchema = new mongoose.Schema({
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
    }
},{timestamps:true});

const DonorModel = mongoose.models.donors || mongoose.model('donors',donorSchema);

export default DonorModel;
