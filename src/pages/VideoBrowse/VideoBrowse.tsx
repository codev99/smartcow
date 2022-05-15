import { HeaderVideoBrowse } from "../../components/Header/Header";
import { Layout1Col } from "../../components/Layout/Layout1Col";
import { VideoThumb } from "./components/VideoThumb/VideoThumb";

export const VideoBrowse = () => {
  return (
    <>
      <HeaderVideoBrowse />
      <Layout1Col>
        <VideoThumb />
      </Layout1Col>
    </>
  )
};