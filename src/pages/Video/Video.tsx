import { Layout2Cols } from "../../components/Layout2Cols/Layout2Cols";
import { ActorThumbs } from "./components/ActorThumbs/ActorThumbs";
import { Alignment } from "./components/Alignment/Alignment";
import { Backgrounds } from "./components/Backgrounds/Backgrounds";
import { Tabs } from "./components/Tabs/Tabs";
import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer";
import { Voices } from "./components/Voices/Voices";

export const Video = () => {
  return (
    <Layout2Cols
      col1={<VideoPlayer />}
      col2={
        <Tabs
          labels={["Actor", "Voice", "Alignment", "Background"]}
          panels={[<ActorThumbs />, <Voices />, <Alignment />, <Backgrounds />]}
        />
      }
    />
  );
};