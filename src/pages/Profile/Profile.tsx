import { HeaderProfile } from "../../components/Header/Header";
import { Layout1Col } from "../../components/Layout/Layout1Col";
import { Tabs } from "../Video/components/Tabs/Tabs";
import { Billing } from "./components/Billing/Billing";
import { Plan } from "./components/Plan/Plan";
import { ProfileForm } from "./components/ProfileForm/ProfileForm";

export const Profile = () => {
  return (
    <>
      <HeaderProfile />
      <Layout1Col>
        <Tabs
          labels={["Profile", "My Plan", "Billing"]}
          panels={[<ProfileForm />, <Plan />, <Billing />]}
        />
      </Layout1Col>
    </>
  )
};