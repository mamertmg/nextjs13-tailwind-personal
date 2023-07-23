import { useContext } from "react";
import { TokyoContext } from "../Context";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const StartupsInfo = [
  {
    id: 1,
    title: "Simplr is the first life-as-a-service platform designed for households and businesses to power the circular economy",
    image: "assets/img/startups/simplr-logo.png",
    funding_round: "Pre-seed",
    date: "2020",
  },
  {
    id: 2,
    title: "Incapto Coffee offers the sale of the automatic coffee machine and a subscription system for coffee beans.",
    image: "assets/img/startups/incapto-coffee-logo.png",
    funding_round: "Venture Round",
    date: "2023",
  },
  {
    id: 3,
    title: "HR Bot Factory is a human resources management company that promotes hassle-free and virtual recruitment.",
    image: "assets/img/startups/hr-bot-factory-logo.png",
    funding_round: "Private Equity Round",
    date: "2022",
  },
  {
    id: 4,
    title: "Bcas is a Madrid based fintech unlocking access to quality education through student finance for students from all backgrounds.",
    image: "assets/img/startups/bcas-logo.png",
    funding_round: "Seed",
    date: "2023",
  },
];

const Startups = () => {
  const { setNewsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"startups"}>
      <div className="container">
        <div className="tokyo_tm_news w-full clear-both float-left h-auto pt-[100px] px-0 pb-[45px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName={"Startups"} title={"Startups invested"} />
            </div>
          </div>
          <ul className="ml-[-50px] list-none">
            {StartupsInfo.map((item) => (
              <li
                className="mb-[50px] float-left w-1/2 pl-[50px]"
                key={item.id}
              >
                <div className="list_inner w-full clear-both float-left h-auto relative">
                  <div className="image relative overflow-hidden">
                    <img
                      className="min-w-full opacity-0"
                      src="assets/img/thumbs/40-25.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                      data-img-url={item.image}
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <a
                      className="tokyo_tm_full_link"
                      href="#"
                      onClick={() => {
                        modalToggle(true);
                        setNewsModal(item);
                      }}
                    />
                  </div>
                  <div className="details w-full float-left px-[40px] pt-[30px] pb-[25px] bg-white transition-all duration-300">
                    <div className="extra flex items-center justify-between mb-[25px] relative">
                      <div className="short">
                        <p className="date font-montserrat text-[13px] text-[#767676]">
                          <a
                            className="text-[#767676] transition-all duration-300 hover:text-black"
                            href="#"
                            onClick={() => {
                              modalToggle(true);
                              setNewsModal(item);
                            }}
                          >
                            {item.funding_round}
                          </a>{" "}
                          <span className="relative">{item.date}</span>
                        </p>
                      </div>
                    </div>
                    <h3 className="title mb-[10px] leading-[1.4]">
                      <a
                        className="text-black text-[18px] font-semibold inline-block transition-all duration-300 hover:text-black"
                        href="#"
                        onClick={() => {
                          modalToggle(true);
                          setNewsModal(item);
                        }}
                      >
                        {item.title}
                      </a>
                    </h3>
                    <div className="tokyo_tm_read_more">
                      <a
                        href="#"
                        onClick={() => {
                          modalToggle(true);
                          setNewsModal(item);
                        }}
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Startups;
