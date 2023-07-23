const DataFacts = [
  { id: 1, value: "15+", name: "Years of experience" },
  { id: 2, value: "56", name: "Countries visited" },
  { id: 3, value: "3", name: "" },
];

const Facts = () => {
  return (
    <div className="tokyo_tm_facts w-full h-auto clear-both float-left px-0 pt-[100px] pb-[60px]">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Facts</h3>
        </div>
        <div className="list w-full h-auto clear-both float-left">
          <ul className="ml-[-40px] list-none">
            {DataFacts.map((item) => (
              <li
                className="mb-[40px] pl-[40px] w-1/3 float-left"
                key={item.id}
              >
                <div className="list_inner  w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border text-center px-[20px] py-[40px]">
                  <h3 className="font-semibold text-[20px] mb-[3px]">
                    {item.value}
                  </h3>
                  <span>{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Facts;
