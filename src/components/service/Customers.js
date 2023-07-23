const customersDark = [
  { id: 1, image: "assets/img/customers/aptiv-logo.png" },
  { id: 2, image: "assets/img/customers/bsh-logo.png" },
  { id: 3, image: "assets/img/customers/bticino-logo.png" },
  { id: 4, image: "assets/img/customers/continental-logo.png" },
  { id: 5, image: "assets/img/customers/electrolux-logo.png" },
  { id: 6, image: "assets/img/customers/ert-logo.png" },
  { id: 7, image: "assets/img/customers/faurecia-logo.png" },
  { id: 8, image: "assets/img/customers/frisokar-logo.png" },
  { id: 9, image: "assets/img/customers/grammer-logo.png" },
  { id: 10, image: "assets/img/customers/grundfos-logo.png" },
  { id: 11, image: "assets/img/customers/grupo-antolin-logo.png" },
  { id: 12, image: "assets/img/customers/grupo-copo-logo.png" },
  { id: 13, image: "assets/img/customers/honeywell-logo.png" },
  { id: 14, image: "assets/img/customers/hyundai-dymos-logo.png" },
  { id: 15, image: "assets/img/customers/iac-logo.png" },
  { id: 16, image: "assets/img/customers/inema-logo.png" },
  { id: 17, image: "assets/img/customers/insa-logo.png" },
  { id: 18, image: "assets/img/customers/itron-logo.png" },
  { id: 19, image: "assets/img/customers/johnson-controls-logo.png" },
  { id: 20, image: "assets/img/customers/landis-and-gyr-logo.png" },
  { id: 21, image: "assets/img/customers/legrand-logo.png" },
  { id: 22, image: "assets/img/customers/lear-logo.png" },
  { id: 23, image: "assets/img/customers/magna-logo.png" },
  { id: 24, image: "assets/img/customers/novem-logo.png" },
  { id: 25, image: "assets/img/customers/sagemcom-logo.png" },
  { id: 26, image: "assets/img/customers/siemens-logo.png" },
  { id: 27, image: "assets/img/customers/smp-logo.png" },
  { id: 28, image: "assets/img/customers/whirlpool-logo.png" },
  { id: 29, image: "assets/img/customers/yanfeng-logo.png" },
];

const Customers = () => {
  return (
    <div className="tokyo_tm_partners w-full h-auto clear-both float-left bg-white py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Customers</h3>
        </div>
        <div className="partners_inner w-full h-auto clear-both float-left">
          <ul className="mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] list-none pt-[2px] float-left pl-[2px]">
            {customersDark.map((partner) => (
              <li
                key={partner.id}
                className="m-0 float-left w-1/4 border-solid border-[#eee] border-2 text-center h-[145px] leading-[145px] relative mt-[-2px] ml-[-2px] overflow-hidden"
              >
                <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                  <img
                    className="max-w-[50%] max-h-[100px] inline-block"
                    src={partner.image}
                    alt="image"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Customers;
