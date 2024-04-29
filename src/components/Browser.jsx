import Head from "./Head";
import useNowplaying from "../hooks/useNowplaying";
import MainContainer from "./MainContainer";

const Browser = () => {
  useNowplaying();
  return (
    <div>
      <Head />
      <MainContainer />
    </div>
  );
};

export default Browser;
