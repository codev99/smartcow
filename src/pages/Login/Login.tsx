import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Routes from "../../app/routes";
import { HeaderLogin } from "../../components/Header/Header";
import { Layout1Col } from "../../components/Layout/Layout1Col";
import { WrapperBackground } from "../../components/WrapperBackground/WrapperBackground";
import { LoginForm } from "./LoginForm/LoginForm";

export const Login = () => {
  const navigate = useNavigate();

  const signin = (email: string, password: string) => {
    localStorage.setItem("smartcow", JSON.stringify({ email: email, password: password }));
    navigate(Routes.VIDEO);
  };

  useEffect(() => {
    if (localStorage.getItem("smartcow")) {
      navigate(Routes.VIDEO);
    }
  }, [navigate]);

  return (
    <WrapperBackground>
      <>
        <HeaderLogin />
        <Layout1Col>
          <LoginForm signin={signin} />
        </Layout1Col>
      </>
    </WrapperBackground>
  )
};