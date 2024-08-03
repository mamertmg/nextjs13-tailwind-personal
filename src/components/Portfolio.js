import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });

  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Web development examples"}
              />

            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              <li className="vimeo mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="React and TailwindCSS"
                    data-category="landing page"
                  >
                    <a href="https://modern-ui-ux-five.vercel.app/">
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/40-25.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/modern-ui-ux.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="NextJS with Typescript and TailwindCSS"
                    data-category="landing page"
                  >
                    <a
                      href="https://nextjs13-car-showcase.vercel.app/"
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/40-25.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/car-logo.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="React, Sanity and Stripe"
                    data-category="e-commerce"
                  >
                    <a
                      href="https://ecommerce-sanity-stripe-nu-ten.vercel.app"
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/40-25.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/ecommerce.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="React, TailwindCSS and Context hook"
                    data-category="e-commerce"
                  >
                    <a href="https://ecommerce-shop-seven.vercel.app/">
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/40-25.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/shop-ecommerce.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="React and TailwindCSS"
                    data-category="landing page"
                  >
                    <a href="https://gym-landing-page-puce.vercel.app">
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/40-25.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/gym-landingpage.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-[250px] clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="React and TailwindCSS"
                    data-category="landing page"
                  >
                    <a href="https://github-search-gamma-olive.vercel.app/">
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/40-25.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/github-search.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-[250px] clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="NextJS and Markdown"
                    data-category="blog"
                  >
                    <a href="https://blog-markdown-plum.vercel.app">
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/40-25.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/blog-markdown.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-[250px] clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="React and TailwindCSS"
                    data-category="landing page"
                  >
                    <a href="https://restaurant-ui-ux-eight.vercel.app/">
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/40-25.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/restaurante-logo.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;