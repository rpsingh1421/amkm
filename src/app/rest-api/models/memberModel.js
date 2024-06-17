
import { mongoose } from "mongoose";

const teamMemberSchema = new mongoose.Schema({
    member_name:{
        type:String,
        required:true
    },
    member_email:{
        type:String,
        required:true
    },
    contact:{
        type: Number,
        min: [1000000000, 'not a valid number'],
        max: [9999999999,'should not exceed 10 digit'],
        required:true
    },
    profile_image:{
        type:String,
    },
    aadhar_number:{
        type: Number,
    },
    aadhar_image:{
        type:String,
    },
    pancard_number:{
        type: String,
    },
    pancard_image:{
        type:String,
    },
    state:String,
    district:String,
    city:String,
    pincode:{
        type:Number,
        max:[999999,'{VALUE} is not valid pincode'],
        min:[100000,'{VALUE} is not valid pincode']
    },
    password:{
        type:String,
        required:true
    },
    role:String,
    status: {
        type: Boolean,
        default: false
    },
    trash: {
        type: Boolean,
        default: false
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    deletedAt:{
        type: Date
    }
}, { timestamps: true });

const TeamMemberModel = mongoose.models.team_members || mongoose.model('team_members', teamMemberSchema);
export default TeamMemberModel;