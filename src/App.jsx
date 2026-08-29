import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Information from "./components/Information";
import PublisherExplorer from "./components/PublisherExplorer/PublisherExplorer";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top">
      <Navbar/>
      <Hero />
      <Information />
      <PublisherExplorer />
      <Subscription /> 
      <Footer /> 
    </div>
  );
}

export default App;
