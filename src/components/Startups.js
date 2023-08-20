import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const StartupsInfo = [
  {
    id: 1,
    title: "Simplr is the first life-as-a-service platform designed for households and businesses to power the circular economy",
    image: "assets/img/startups/simplr-logo.png",
    status: "Active",
    date: "2021",
    email:"https://www.simplr.io/"
  },
  {
    id: 2,
    title: "Incapto Coffee offers the sale of the automatic coffee machine and a subscription system for coffee beans.",
    image: "assets/img/startups/incapto-coffee-logo.png",
    status: "Active",
    date: "2021",
    email:"https://incapto.com/"
  },
  {
    id: 3,
    title: "HR Bot Factory is a human resources management company that promotes hassle-free and virtual recruitment.",
    image: "assets/img/startups/hr-bot-factory-logo.png",
    status: "Active",
    date: "2021",
    email: "https://www.hrbotfactory.com/"
  },
  {
    id: 4,
    title: "Bcas is a Madrid based fintech unlocking access to quality education through student finance for students from all backgrounds.",
    image: "assets/img/startups/bcas-logo.png",
    status: "Active",
    date: "2023",
    email:"https://bcasapp.com/"
  },
];

const Startups = () => {

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
                      href={item.email}
                    />
                  </div>
                  <div className="details w-full float-left px-[40px] pt-[30px] pb-[25px] bg-white transition-all duration-300">
                    <div className="extra flex items-center justify-between mb-[25px] relative">
                      <div className="short">
                        <p className="date font-montserrat text-[13px] text-[#767676]">
                          {item.status}
                          <span className="relative">Invested in {item.date}</span>
                        </p>
                      </div>
                    </div>
                    <h3 className="title mb-[10px] leading-[1.4]">
                      <a
                        className="text-black text-[18px] font-semibold inline-block transition-all duration-300 hover:text-black"
                        href={item.email}
                      >
                        {item.title}
                      </a>
                    </h3>
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
