import SectionContainer from "./SectionContainer";

const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center">
            <div
              className="avatar min-w-[300px] min-h-[300px] relative rounded-full"
              data-type="wave"
            >
              {" "}
              {/* data-type values are: "wave", "circle", "square"*/}
              <div
                className="image absolute inset-0 bg-no-repeat bg-center bg-cover"
                data-img-url="assets/img/slider/Profile.jpg"
              />
            </div>
            <div className="details ml-[80px]">
              <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">
                Alberto <span>Márquez</span>
              </h3>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
                Hi, welcome to my personal official website!
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
