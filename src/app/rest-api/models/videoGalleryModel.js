import  mongoose  from "mongoose";
import TeamMemberModel from "./memberModel";

const videoGallerySchema = new mongoose.Schema({
    fileName: {
        type:String,
        reqired:true
    },
    filePath: {
        type:String,
        reqired:true
    },
    categoryName:{ //project,activity,work
        type:String,
        reqired:true
    },
    status: {
        type: Boolean,
        default: true
    },
    trash: {
        type: Boolean,
        default: false
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team_members'
    }
},{timestamps:true});

const VideoGalleryModel = mongoose.models.video_gallery || mongoose.model('video_gallery', videoGallerySchema);
export default VideoGalleryModel;