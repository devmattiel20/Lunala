import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Information from "./components/Information";
import PublisherExplorer from "./components/PublisherExplorer/PublisherExplorer";
import Subscription from "./components/Subscription";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Information />
      <PublisherExplorer />
      <Subscription />  
    </>
  );
}

export default App;
