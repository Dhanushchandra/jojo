import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Maindiv from "./components/Body-container/Merging-div/Maindiv";
import Water from "./components/Water-containers/Water";

function App() {
  return (
    <>
      <Navbar />
      <Maindiv />
      <Water />
      <Footer />
    </>
  );
}

export default App;
