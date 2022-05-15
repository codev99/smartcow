import { HeaderProfile } from "../../components/Header/Header";
import { Layout1Col } from "../../components/Layout/Layout1Col";
import { Tabs } from "../Video/components/Tabs/Tabs";
import { Billing } from "./components/Billing/Billing";
import { Plans } from "./components/Plans/Plans";
import { ProfileForm } from "./components/ProfileForm/ProfileForm";

export const Profile = () => {
  return (
    <>
      <HeaderProfile />
      <Layout1Col>
        <Tabs
          labels={["Profile", "My Plan", "Billing"]}
          panels={[<ProfileForm />, <Plans />, <Billing />]}
        />
      </Layout1Col>
    </>
  )
};