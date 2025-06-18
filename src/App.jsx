import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Title from "./components/Title";
import About from "./components/About";
import Campus from "./components/Campus";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoPlayer from "./components/VideoPlayer";
import { useState } from "react";

function App() {
  const [play, setPlay] = useState(false);

  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Hero></Hero>
        <Title title="Our Program" subtitle="What We Offer"></Title>
        <Programs></Programs>
        <About setPlay={setPlay}></About>
        <Title title="Gallery" subtitle="Our Campus Photos"></Title>
        <Campus></Campus>
        <Title title="Testimonials" subtitle="What Our Student Says"></Title>
        <Testimonials></Testimonials>
        <Title title="Contact Us" subtitle="Get In Touch"></Title>
        <Contact></Contact>
        <Footer></Footer>
        <VideoPlayer play={play} setPlay={setPlay}></VideoPlayer>
      </div>
    </>
  );
}

export default App;
