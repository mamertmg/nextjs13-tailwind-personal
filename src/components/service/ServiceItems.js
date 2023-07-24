import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Sales and Business Development",
    text: [
      "Develop and implement strategic account plans to achieve sales targets and maximize revenue growth within my assigned region.",
      "Identify new business opportunities and potential clients, expanding the customer base.",
      "Collaborate with internal teams, such as R&D, product management, and technical support, to deliver tailored solutions and offerings that align with client needs."
    ],
    image: "assets/img/services/sales.png",
  },
  {
    id: 2,
    name: "Account Management",
    text: [
      "Conduct regular business reviews with customers to assess satisfaction levels, identify areas for improvement, and explore opportunities for upselling and cross-selling.",
      "Monitor and analyze account performance, sales metrics, and market trends to identify growth opportunities and mitigate potential risks.",
      "Negotiate and close sales contracts, ensuring terms and conditions are in line with company policies and guidelines.",
    ],
    image: "assets/img/services/account-management.png",
  },
  {
    id: 3,
    name: "Polymers Technical Expertise",
    text: [
      "Develop a deep understanding of customer's portfolio, applications, and industry standards to leverage my knowledge in thermoplastics and polyurethanes.",
      "Stay up to date with the latest advancements in technologies, regulations, and standards to effectively communicate and position the company's offerings."
    ],
    image: "assets/img/services/plastics.png",
  },
  {
    id: 4,
    name: "Customer relationship management",
    text: [
      "Establish and maintain strong relationships with key clients in the industry across my assigned region.",
      "Understand client needs and requirements, and proactively offer suitable solutions and services to meet their business objectives."
    ],
    image: "assets/img/services/customer-management.png",
  },
  {
    id: 5,
    name: "Sustainability",
    text: [
      "Leverage cross-functional collaboration to develop and execute strategies for driving the chemical and polymers industry towards sustainability by using renewable feedstocks and promoting circular economy principles through chemical and mechanical recycling.",
      "Advocate for regulatory compliance and adherence to international sustainability standards, ensuring the chemical and polymers industry's long-term viability and fostering a culture of sustainability across the organization.",
    ],
    image: "assets/img/services/sustainability.png",
  },
  {
    id: 6,
    name: "Digitalization",
    text: [
      "Foster the digital transformation of the chemical industry, leading the integration of cutting-edge technologies and data-driven solutions to optimize processes, enhance operational efficiency, and streamline supply chain management.",
      "Collaborate with cross-functional teams to implement digital platforms and analytics tools, enabling real-time data analysis, predictive maintenance, and proactive decision-making, driving the chemical industry towards a more agile, competitive, and sustainable future.",
      "Champion the adoption of Industry 4.0 principles, harnessing the power of automation, artificial intelligence, and IoT to revolutionize traditional chemical manufacturing, resulting in increased productivity and reduced operational costs.",
    ],
    image: "assets/img/services/digitalization.png",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
