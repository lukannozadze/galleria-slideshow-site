import fetchData from "../../data.json";
const Description = (props) => {
  return (
    <div className="pt-[46px] pl-6 pr-6 text-left pb-[67px] ">
      <div className="relative ">
        <div className="md:flex md:flex-col md:items-center">
          <img
            width="64px"
            height="64px"
            className="ml-4 md:w-[128px] md:h-[128px]"
            src={props.artistImg}
            alt="artist"
          />
          <span className="text-[100px] leading-[100px] text-[#F3F3F3] absolute top-[44px] right-0 md:text-[200px] md:leading-[150px] md:top-[130px] md:left-0 lg:opacity-50">
            {fetchData[props.active].year}
          </span>
          <p className="text-[14px] font-bold leading-[28px] text-[#7D7D7D] mt-[54px] mb-[68px] md:w-[457px] md:h-[252px] ">
            {fetchData[props.active].description}
          </p>
          <a
            href={fetchData[props.active].source}
            className="uppercase text-[#7D7D7D] font-bold text-[9px] leading-[11px] tracking-[1.93px] underline hover:text-black duration-500"
          >
            go to source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Description;
