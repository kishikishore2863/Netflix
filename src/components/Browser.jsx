import Head from "./Head";
import useNowplaying from "../hooks/useNowplaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  useNowplaying();
  return (
    <div>
      <Head />
      <MainContainer />
      {/* <SecondaryContainer></SecondaryContainer> */}
    </div>
  );
};

export default Browser;
