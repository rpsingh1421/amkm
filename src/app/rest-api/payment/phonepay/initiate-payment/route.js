// app/rest-api/phonepay/initiate-payment/route.js
import DonorModel from '@/app/rest-api/models/donorModel';
import OnlineTransactionModel from '@/app/rest-api/models/onlineTransactionModel';
import connect from '@/utils/dbConnect';
import crypto from "crypto-js";
import axios from "axios";
import { NextResponse } from 'next/server';

await connect();
export async function POST(req) {
    const receivedData= await req.json();
    console.log("received details from donation page:",receivedData);
    const amount = receivedData.paidAmount;
    console.log("selected amount from donor:",amount);
    delete receivedData.paidAmount;
    const donorDetails = receivedData;
    console.log("received details of donor:",donorDetails);
    let paymentUrl;
    let merchantUserId;
    try{
    //     //create donor details in donor table in database ,if user pancard is not registered already,if already registered just fetch donor Id
        const isDonorExisting = await DonorModel.findOne({panNumber:donorDetails.panNumber});
        
        if(!isDonorExisting){
            console.log("donor not donated earlier...not record found");
            const newSavedDonor = await DonorModel.create(donorDetails);
            console.log("donor record created :",newSavedDonor);
            merchantUserId = newSavedDonor._id;
        }else{
            console.log("donor had donated earlier...record found");
            merchantUserId = isDonorExisting._id;
        }
        
        console.log("donor id:",merchantUserId)
        // Create an order in your database transactionModel
        const order = await OnlineTransactionModel.create({
            amount:amount,
            status: 'PENDING',
            donor: merchantUserId,
        });
        console.log("new order is:",order)
        
        const apidata = {
            merchantId: process.env.PHONEPE_MERCHANT_ID,
            merchantTransactionId: order._id.toString(),
            merchantUserId: merchantUserId.toString(),
            amount: amount * 100,
            redirectUrl: `https://www.amkmofficial.com/rest-api/payment/phonepay/phonepe-callback`,
            redirectMode: "POST",
            callbackUrl: "https://www.amkmofficial.com/rest-api/payment/phonepay/phonepe-callback",
            mobileNumber: receivedData.contactNumber.toString(),
            paymentInstrument: {
                type: "PAY_PAGE",
            },
        };
        // Convert JSON to string
        const data2 = JSON.stringify(apidata);
        // Encode to Base64
        const base64data = Buffer.from(data2).toString("base64");

        const hash = crypto
            .SHA256(base64data + "/pg/v1/pay" + process.env.SALT_KEY)
            .toString(crypto.enc.Hex);
        const verify = hash + "###" + process.env.SALT_KEY_INDEX;

        const response = await axios.post(
            "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
            { request: base64data },
            {
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    "X-VERIFY": verify,
                },
            }
        );
        // Redirect user to PhonePe payment page
        paymentUrl = response.data.data.instrumentResponse.redirectInfo.url;            
    } catch (error) {
        console.error('error in payment-initiation:',error);
        return NextResponse.json({ error: 'Something went wrong' ,error},{status:500});
    }
    return NextResponse.json({ success: true, paymentUrl }, { status: 200 });
}
