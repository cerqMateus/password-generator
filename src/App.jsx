import MainCard from "./components/MainCard";
import Output from "./components/Output";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 w-screen h-screen flex items-center justify-center flex-col gap-6">
      <MainCard />
      <Output />
    </div>
  );
};

export default App;
