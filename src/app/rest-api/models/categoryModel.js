import { mongoose } from "mongoose";
import TeamMemberModel from "./memberModel";

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true
    },
    category_type: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    trash: {
        type: Boolean,
        default: false
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team_members'
    }
}, { timestamps: true });

const MediaCategoryModel = mongoose.models.media_categories || mongoose.model('media_categories', categorySchema);
export default MediaCategoryModel;
