import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Divider from "./components/divider/Divider";
import Hero from "./content/Hero/Hero";
import Section from "./content/section1/Section";
import Section2 from "./content/section2/Section2";
import Footer from "./content/footer/Footer";
import Gallery from "./content/gallery/Gallery";
import Gallery2 from "./content/gallery2/Gallery2";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider
        head="Good News"
        para="Roshni Welfare Organization will soon launch the various Welfare Programs for the Welfare of our Nation."
      />
      <Section />
      <Section2 />

      <Gallery />
      <Gallery2 />
      <Footer />
    </>
  );
}

export default App;
