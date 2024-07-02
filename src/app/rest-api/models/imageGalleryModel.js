import  mongoose  from "mongoose";
import TeamMemberModel from "./memberModel";

const imageGallerySchema = new mongoose.Schema({
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
        default: false
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

const ImageGalleryModel = mongoose.models.image_gallery || mongoose.model('image_gallery', imageGallerySchema);
export default ImageGalleryModel;