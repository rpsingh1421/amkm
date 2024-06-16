import mongoose from "mongoose";
import TeamMemberModel from "./memberModel";
const contactDirectorySchema =new mongoose.Schema({
    email: {
        type:String,
        reqired:true
    },
    contact:{
        type: Number,
        min: [1000000000, 'not a valid number'],
        max: [9999999999,'should not exceed 10 digit'],
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team_members'
    }
},{timestamps:true});
const ContactDirectory = mongoose.models.contact_directory || mongoose.model('contact_directory', contactDirectorySchema);
export default ContactDirectory;