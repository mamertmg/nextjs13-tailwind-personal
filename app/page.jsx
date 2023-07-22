import State from "../context/Context";
import PreLoader from "../app/components/PreLoader";
import dynamic from "next/dynamic";
import "../styles/global.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components//Home";
import News from "./components//News";
import Service from "./components//Service";

const Portfolio = dynamic(() => import("./components/Portfolio"), {ssr: false,});

export default function App({ Component, pageProps }) {
  return (
    <State>
      <PreLoader />
      <Home />
      <About />
      <Service />
      <div className="tokyo_tm_portfolio_titles" />
      <Portfolio />
      <News />
      <Contact />
    </State>
  );
}