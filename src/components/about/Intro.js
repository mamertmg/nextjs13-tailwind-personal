import { Fragment } from "react";
import Link from "next/link";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/slider/Profile.jpg" alt="image" />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Alberto Márquez</h3>
        <span>Chemical Engineer | Sales & Account Manager | Plastics Expert |  Web Developer | Startup investor</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]" align="justify">
          Hi, my name is Alberto Márquez and I am a sales-driven professional with over 15 years of experience in the plastics / polymers industry. I have held various roles in technical application, sales and account management, and business development in international B2B markets.
        <br/>
        <br/>
        With a strong technical background and extensive international business experience, I have successfully collaborated in cross-functional global teams. My focus has been on driving the chemical industry and end customers towards sustainability by reducing carbon footprint through the use of renewable feedstocks and promoting circular economy principles through chemical and mechanical recycling (PCR and PIR).
        <br/>
        <br/>
        I possess in-depth knowledge of various polymers, including Polyurethanes (PU), Polycarbonates (PC), PBT, PP, PE, PS, POM, PMMA, and ABS. 
        <br/>
        <br/>
        My expertise spans across diverse industries, including Electrical and Electronics, Automotive, Insulation, and Construction.
        <br/>
        <br/>
        In recent years, I have also developed a passion for web development. I have completed projects utilizing Javascript/Typescript and AWS cloud solutions, showcasing my skills and commitment to continuous learning. You can explore my work on my <a className="font-black" href="https://github.com/mamertmg">Github</a> profile.
        <br/>
        <br />
        Additionally, as an early startup investor, I seek out ideas and passionate entrepreneurs to support. I like to evaluate business ideas I consider investing in and that align with my interests and expertise in sustainability, digitalization and circular economy.
        <br/>
        <br />
        Let's connect and explore opportunities to leverage my experience in driving sales, fostering sustainability, and contributing to the growth of innovative industries.
        <br/>
        <br/>
        #Sales #Polymers #Sustainability #CircularEconomy #WebDevelopment #Startups
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Birthday:
                </span>
                <span>15.02.1984</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Birthplace:
                </span>
                <span>Barcelona</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Address:
                </span>
                <span>Meerbusch, Düsseldorf</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:marquezgarcia.a@gmail.com"
                  >
                    marquezgarcia.a@gmail.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Phone:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="tel:+49 176 325 176 93"
                  >
                    +49 176 325 176 93
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Nationality:
                </span>
                <span>Spanish</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Study:
                </span>
                <span>ESADE and IQS School of Engineering</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Degree:
                </span>
                <span>MBA and Master's degrees</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Interest:
                </span>
                <span>Earger learner</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Freelance:
                </span>
                <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="https://www.linkedin.com/in/marquezalberto">
          <span>Check my Profile in Linkedin</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
