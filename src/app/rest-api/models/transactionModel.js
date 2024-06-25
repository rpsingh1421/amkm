// models/transactionModel.js
import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    transactionId: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 

    },
    createdAt: { 
        type: Date, 
        default: Date.now 

    }
});

const OnlineTransactionModel = mongoose.models.online_transactions || mongoose.model('online_transactions', TransactionSchema);
export default OnlineTransactionModel;