import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Login } from "../features/Login/Login";
import { Profile } from "../features/Profile/Profile";
import { Signup } from "../features/Signup/Signup";
import { Video } from "../features/Video/Video";
import { VideoBrowse } from "../features/VideoBrowse/VideoBrowse";
import AppRoutes from "./routes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.ROOT} element={<Layout />}>
          <Route index element={<Login />} />

          <Route path={AppRoutes.VIDEOBROWSE} element={<VideoBrowse />} />
          <Route path={AppRoutes.VIDEO} element={<Video />} />
          <Route path={AppRoutes.PROFILE} element={<Profile />} />

          <Route path={AppRoutes.SIGNUP} element={<Signup />} />

          <Route path="/404" element={<h1>Page not found</h1>} />
          <Route path="/*" element={<Navigate replace to="/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
