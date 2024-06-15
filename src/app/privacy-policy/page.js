
import PrivacyPolicy from "./PrivacyPolicy"
import MainLayout from "../components/Layout/MainLayout"
import GIveUsHand from "../components/GiveUsHand";

const privacyPage =()=>{
    return(
        <MainLayout>
        <PrivacyPolicy/>
        <GIveUsHand/>
        </MainLayout>
    )
}
export default privacyPage
export const metadata = {
    title: "Privacy Policy",
};