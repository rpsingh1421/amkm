import GIveUsHand from "../components/GiveUsHand"
import MainLayout from "../components/Layout/MainLayout"
import TermsConditions from "./TermsConditions"

const TermsAndConditions =()=>{
    return(
        <MainLayout>
            <TermsConditions/>
            <GIveUsHand/>
        </MainLayout>
    )
}

export default TermsAndConditions

export const metadata = {
    title: "Terms & Conditions",
  };