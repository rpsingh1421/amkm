import { NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import OnlineTransactionModel from "@/app/rest-api/models/onlineTransactionModel";
import connect from '@/utils/dbConnect';

await connect();
export async function POST(req) {
  try {
    const data = await req.formData();

    // Convert FormData to a regular object if needed...just for debugging
    const receivedResponse = Object.fromEntries(data);
    console.log("Received form data response:",receivedResponse);

    /**Received form data response: {
        code: 'PAYMENT_SUCCESS',
        merchantId: 'M110NES2UDXSUAT',
        transactionId: '667c215f93e2c7c8612a234c',
        amount: '300000',
        providerReferenceId: 'T2406261940392115519598',
        param1: 'na',
        param2: 'na',
        param3: 'na',
        param4: 'na',
        param5: 'na',
        param6: 'na',
        param7: 'na',
        param8: 'na',
        param9: 'na',
        param10: 'na',
        param11: 'na',
        param12: 'na',
        param13: 'na',
        param14: 'na',
        param15: 'na',
        param16: 'na',
        param17: 'na',
        param18: 'na',
        param19: 'na',
        param20: 'na',
        checksum: '2ec420101ce340d500564d384adb5625accf5354bedcfa4588a9a4d915c2dbd0###1'
        } */

    const {merchantId,transactionId,amount,providerReferenceId,code}=receivedResponse;
    // const merchantId = data.get("merchantId");
    // const transactionId = data.get("transactionId");
    // const amount = data.get("amount");
    // const providerReferenceId = data.get("providerReferenceId");

    const st = `/pg/v1/status/${merchantId}/${transactionId}${process.env.SALT_KEY}`;
    const dataSha256 = sha256(st).toString();
    const checksum = `${dataSha256}###${process.env.SALT_KEY_INDEX}`;

    const options = {
      method: "GET",
      url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": merchantId,
      },
    };

    const response = await axios.request(options);
    let orderDetails;//already created in online_transactions..will be used to update 
    if (response.data.code === "PAYMENT_SUCCESS") {
        // Update the order in your database
        try {
            orderDetails = await OnlineTransactionModel.findByIdAndUpdate(transactionId, {
                transactionId:transactionId,
                status:code,
                refrenceId:providerReferenceId
            }).populate('donor');
        } catch (error) {
            console.error('paymeny is successfull....entry into database not done',error);
        }
        console.log("donor name is:",orderDetails.donor.donorName);
        // return NextResponse.redirect(new URL(`/payment/payment-successfull/${transactionId}`, request.url));
        return NextResponse.redirect(`https://www.amkmofficial.com/payment/success?transactionId=${transactionId}&amount=${amount}&providerReferenceId=${providerReferenceId}&donor=${orderDetails.donor.donorName}`, { status: 301, });
    } else {
        return NextResponse.redirect(`https://www.amkmofficial.com/payment/failure?transactionId=${transactionId}&amount=${amount}&providerReferenceId=${providerReferenceId}&donor=${orderDetails.donor.donorName}`, { status: 301, });
    }
    } catch (error) {
        console.error(error);
        return NextResponse.redirect(`https://www.amkmofficial.com/payment/failure?transactionId=${transactionId}&amount=${amount}&providerReferenceId=${providerReferenceId}&donor=${orderDetails.donor.donorName}`, { status: 301 });
    }
}
