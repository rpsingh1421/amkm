import mongoose from "mongoose";

const homePageSchema = new mongoose.Schema({
    section:{
        type:String,
        required:true
    },
    content:{
        type:String,
    },
    quote1:{
        type:String,
    },
    quote2:{
        type:String,
    },
    image1:{
        type:String
    },
    image2:{
        type:String
    }
},{timestamps:true});

const HomePageModel = mongoose.models.homepage_section || mongoose.model('homepage_section',homePageSchema);

export default HomePageModel;