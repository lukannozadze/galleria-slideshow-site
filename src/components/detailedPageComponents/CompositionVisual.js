import fetchData from "../../data.json";
import icon from "../../assets/shared/.gitignore.png";
import { useMediaQuery } from "react-responsive";

const CompositionVisual = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div
      key={props.path}
      className="flex flex-col items-center md:items-start lg:items-center "
    >
      <div>
        <div className="relative">
          <img
            className="pl-6 pr-6 md:w-[475px] md:h-[560px] "
            src={isTabletOrMobile ? props.heroLarge : props.heroImg}
            alt="composition"
          />
          <div
            onClick={() => {
              props.setModalIsShown(true);
            }}
            className="bg-black opacity-75 w-[152px] tracking-[2.14px] leading-[12px]  flex gap-[14px] items-center  p-4 absolute top-4 left-[40px] md:top-auto md:bottom-4  hover:bg-white hover:bg-opacity-25 cursor-pointer duration-500 "
          >
            <img src={icon} alt="icon" />

            <span className="text-white   text-[10px] uppercase pt-1 ">
              view image
            </span>
          </div>
          <div className="flex flex-col w-[280px] h-[104px] gap-[8px] justify-center p-6 bg-white absolute  left-[24px] bottom-0 translate-y-[45%] md:top-0 md:bottom-auto md:translate-y-0 md:right-0 md:left-auto md:w-[445px] md:h-[238px] md:translate-x-[43%]">
            <h1 className="text-[22px] leading-[29px] font-bold w-[252px] md:text-[56px] md:leading-[64px]">
              {fetchData[props.active].name}
            </h1>
            <span className="text-[14px] leading-[19px] text-[#7D7D7D] md:text-[15px]">
              {fetchData[props.active].artist.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompositionVisual;
