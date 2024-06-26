// models/transactionModel.js
import mongoose from 'mongoose';
import DonorModel from './donorModel';

const TransactionSchema = new mongoose.Schema({
    transactionId: { 
        type: String, 
    },
    status: { 
        type: String, 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    donor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'donors',
        required:true
    }
},{timestamps:true});

const OnlineTransactionModel = mongoose.models.online_transactions || mongoose.model('online_transactions', TransactionSchema);
export default OnlineTransactionModel;