import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Maindiv from "./components/Body-container/Merging-div/Maindiv";
import Water from "./components/Water-containers/Water";
import Bitcoindata from "./components/Cryp-Infro/Bitcoindata";
// import Charts from "./components/Charts/Bitcoin/Bitcoin";

function App() {
  return (
    <>
      <Navbar />
      <Maindiv />
      <Footer />
    </>
  );
}

export default App;
