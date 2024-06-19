import mongoose from "mongoose";
import TeamMemberModel from "./memberModel";

const otpSchema = new mongoose.Schema({
    otp:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team_members'
    }

},{timestamps:true});

const OtpModel = mongoose.models.otp_validation || mongoose.model('otp_validation', otpSchema);
export default OtpModel;