import mongoose from "mongoose";
import TeamMemberModel from "./memberModel";

const roleSchema = new mongoose.Schema({
    role_name:{
        type:String,
        required:true
    },
    role_code:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    deletedAt:{
        type: Date
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team_members'
    },
    deleted_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team_members'
    }
},{timestamps:true});

const RoleModel = mongoose.models.member_roles || mongoose.model('member_roles', roleSchema);
export default RoleModel;