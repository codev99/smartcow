import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Routes from "../../app/routes";
import { HeaderSignup } from "../../components/Header/Header";
import { Layout1Col } from "../../components/Layout/Layout1Col";
import { WrapperBackground } from "../../components/WrapperBackground/WrapperBackground";
import { SignupForm } from "./SignupForm/SignupForm";

export const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("smartcow")) {
      navigate(Routes.VIDEO);
    }
  }, [navigate]);

  return (
    <WrapperBackground>
      <>
        <HeaderSignup />
        <Layout1Col>
          <SignupForm />
        </Layout1Col>
      </>
    </WrapperBackground>
  )
};