import Articles from "./components/Articles";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import Kompetensii from "./components/Kompetensii";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Product from "./components/Product";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";


export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <Kompetensii />
      <Product />
      <Services />
      <WhyUs />
      <CallToAction />
      <Articles />
      <News />
      <Footer />
    </div>
  )
}
