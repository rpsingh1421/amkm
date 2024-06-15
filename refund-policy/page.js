import { Paper, Typography } from "@mui/material"
import MainLayout  from "../components/Layout/MainLayout"
import GIveUsHand from "../components/GiveUsHand"

const refundPolicyPage =()=>{
    return(
        <MainLayout>
            <Paper className=" w-full sm:w-[85%] m-auto p-[4%]">
                <Typography component={'h2'} className='font-bold text-2xl md:text-4xl mb-[2%] w-full text-center'>&mdash; <span className='text-[#fc6539]'>Refund Policy</span>&mdash; </Typography>
                <Typography className="leading-loose text-sm font-semibold text-[#9e9f9f]">Donations processed successfully through the payment gateway or any other means will not be refunded. Please choose the cause you wish to support and the amount you wish to contribute carefully. No amount will be deducted in case the transaction fails to process. No donation is small when it comes to helping the underprivileged section of our society. Let us get on mission of empowering the underprivileged!
                </Typography>
            </Paper>
            <GIveUsHand/>
        </MainLayout>
    )
}

export default refundPolicyPage
export const metadata = {
    title: "Refund Policy",
  };