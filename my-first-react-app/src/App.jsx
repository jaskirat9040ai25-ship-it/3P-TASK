import Navbar from "./navbar";
import Banner from "./banner";
import About from "./about";
import Article from "./articlesection";
import Gallery from "./gallery";
import Contact from "./contact";
import Subscribe from "./subscribe";
import Footer from "./footer";
import FeaturedTutorials from "./tutorial";
import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Article />
      <FeaturedTutorials/>
      <Gallery />
      <Contact />
      <Subscribe />
      <Footer />
      

    </>
  );
}

export default App;