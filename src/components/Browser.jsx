import Head from "./Head";
import useNowplaying from "../hooks/useNowplaying";

const Browser = () => {
  useNowplaying();
  return (
    <div>
      <Head />
    </div>
  );
};

export default Browser;
