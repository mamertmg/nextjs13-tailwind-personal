import Layout from "@/src/layout/Layout";
import About from "components/About";
import Contact from "components/Contact";
import Home from "components/Home";
import Startups from "components/Startups";
import Services from "components/Services";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("components/Portfolio"), {
  ssr: false,
});

const page = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
      <div className="tokyo_tm_portfolio_titles" />
      <Portfolio />
      <Startups />
      <Contact />
    </Layout>
  );
};
export default page;
