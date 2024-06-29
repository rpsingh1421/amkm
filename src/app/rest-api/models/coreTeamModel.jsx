import mongoose from 'mongoose'
import TeamMemberModel from './memberModel';

const coreTeamSchema = new mongoose.Schema({
    position:{
        type:String,
        required:true,
    },
    facebook:{
        type:String,
    },
    instagram:{
        type:String,
    },
    twitter:{
        type:String,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team_members'
    },
    status: {
        type: Boolean,
        default: false
    },
},{timestamps:true});

const CoreTeamModel = mongoose.models.core_team || mongoose.model('core_team',coreTeamSchema);
export default CoreTeamModel;