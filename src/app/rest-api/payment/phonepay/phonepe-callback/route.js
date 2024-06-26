// app/rest-api/phonepe-callback/route.js

import OnlineTransactionModel from '@/app/rest-api/models/onlineTransactionModel';
import connect from '@/utils/dbConnect';

await connect();

export async function POST(req) {
    const { merchantTransactionId, transactionId, status } = await req.json();

    try {
        // Update the order in your database
        await OnlineTransactionModel.findByIdAndUpdate(merchantTransactionId, {
            transactionId,
            status,
        });
        // Redirect user to appropriate page based on payment status
        if (status === 'SUCCESS') {
            return NextResponse.redirect(new URL(`/payment/payment-successfull/${transactionId}`, request.url));
        } else {
            return NextResponse.redirect(new URL(`/payment/payment-fail/${transactionId}`, request.url));
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
