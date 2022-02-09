import Resize from "./components/Resize";
import MainRouter from "./hoc/MainRouter/MainRouter";
import useWindowDimensions from "./utils/windowSize";

const App = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div className="app">
      {width < 1080 || height < 710 ? <Resize /> : <MainRouter />}
    </div>
  );
};

export default App;
